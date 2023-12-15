import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true,

                });
                if (user) {
                    //compare password: dùng cách 1 hay cách 2 đều chạy đúng cả =))
                    // Cách 1: dùng asynchronous (bất đồng bộ)
                    let check = await bcrypt.compare(password, user.password);
                    // await bcrypt.compare(password, user.password)


                    // Cách 2: dùng synchronous  (đồng bộ)
                    // let check = bcrypt.compareSync(password, user.password);

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }

            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in our system, plz try other email`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        } catch (e) {
            reject(e)
        }
    })
}
let createNewUser =  (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            //check if user already exists
            let check = await checkUserEmail(data.email)
            if(check === true){
                resolve({
                    arrcode: 1,
                    message: 'your email is used'
                })
            }
            else {
                let hashPassWordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                lastName: data.lastName,
                firstName: data.firstName,
                email: data.email,
                password: hashPassWordFromBcrypt,
                roleId: data.roleId,
            })
            resolve({
                errcode: 0,
                message: 'OK'
            });
            }
        } catch (e) {
            reject(e)
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            //lưu ý, truyền vào đúng password cần hash
            // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
            let hashPassWord = await bcrypt.hashSync(password, salt);

            resolve(hashPassWord);
        } catch (e) {
            reject(e);
        }

    })
}
let getAllUsers = (userId) => {
    return  new Promise(async (resolve, reject) => {
        try{
            let users= ''
            if(userId === 'ALL'){
                users = db.User.findAll({
                    attributes: { //hiển thị tất cả trường ngoại trừ trường pasword
                        exclude: ['password']
                    }
                })
            }
            if(userId && userId !== 'ALL'){
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: { //hiển thị tất cả trường ngoại trừ trường pasword
                        exclude: ['password']
                    }
                })
            }
            resolve(users);
        }
        catch (e) {
            reject(e);
        }
    })
}
let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { id: data.id }

            });
            await user.update(data);
            resolve(true)
        }
        catch(e){
            reject(e);
        }
    })
}
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { id: id }

            });
            await user.destroy(id);
            resolve('delete thanh cong')
        }
        catch(e){
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
    editUser: editUser,
    deleteUser: deleteUser
}