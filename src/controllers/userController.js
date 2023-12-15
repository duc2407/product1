import userService from '../service/userService';
import productService from '../service/productService';
//, {
//     user: req.user,
//     specializations: specializations,
//     clinics: clinics,
//     doctors: doctors,
//     posts: posts,
//     pageId: process.env.PAGE_ID
// }
let getEditPage = async(req, res) => {
    var id_product = req.query.id_product
    const product = await productService.findProductByidproduct(id_product)
    try{
        return res.render('editproduct.ejs', {
            product: product
        })
    }
    catch(e) {
        console.log(e)
    }
}
let getHomePage = async (req, res) => {
    try {
        // let specializations = await homeService.getSpecializations();
        // let clinics = await homeService.getClinics();
        // let doctors = await userService.getInfoDoctors();
        // let posts = await homeService.getPosts(LIMIT_POST);
        return res.render("home.ejs",{
            
        });
    } catch (e) {
        console.log(e);
        // return res.render('main/homepage/pageNotFound.ejs');
    }
};
let getInputStorePage = async (req, res) => {
    try {
        // let specializations = await homeService.getSpecializations();
        // let clinics = await homeService.getClinics();
        // let doctors = await userService.getInfoDoctors();
        // let posts = await homeService.getPosts(LIMIT_POST);

        let productData = await productService.getAllProduct('ALL');
        return res.render("inputstore.ejs",{
            product: productData ? productData : {}

        });
    } catch (e) {
        console.log(e);
        // return res.render('main/homepage/pageNotFound.ejs');
    }
};
let getCreateInputStorePage = async (req, res) => {
    try {
        let productData = await productService.getAllProduct('ALL');
        console.log(productData[0].id_product);
        return res.render('createInput.ejs', {
            product: productData ? productData : {}
        })
    } catch (e) {
        console.log(e) 
    }
}
let getOutStorePage = async (req, res) => {
    try {
        // let specializations = await homeService.getSpecializations();
        // let clinics = await homeService.getClinics();
        // let doctors = await userService.getInfoDoctors();
        // let posts = await homeService.getPosts(LIMIT_POST);
        return res.render("outstore.ejs",{
            
        });
    } catch (e) {
        console.log(e);
        // return res.render('main/homepage/pageNotFound.ejs');
    }
};
let getLoginPage = async (req, res) => {

    try{
        return res.render('login.ejs', {

        })
    }
    catch(e) {
        console.log(e)
    }
}
let getCreateProduct = async (req, res) => {

    try{
        return res.render('createproduct.ejs', {

        })
    }
    catch(e) {
        console.log(e)
    }
}

let handleLoging = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userService.handleUserLogin(email, password)
    
    //check email exist
    //password nhap vao ko dung
    //return userInfor
    // access_token :JWT json web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let checkLoggedIn = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.render('login.ejs', {
            errCode: 1,
            mess: "error password or email"
        })
    }
    let userData = await userService.handleUserLogin(email, password)
    let productData = await productService.getAllProduct('ALL');
    if (userData.errCode == 0){
        return res.render('user.ejs', {
            user: userData.user ? userData.user : {},
            product: productData ? productData : {}
        })
    }
    //check email exist
    //password nhap vao ko dung
    //return userInfor
    // access_token :JWT json web token
    else{
        return res.render('user.ejs', {
            user: userData.user ? userData.user : {},
            product: productData ? productData : {}
        })
        // return res.render('login.ejs', {
        //     errCode: 1,
        //     mess: "error password or email"
        // }) 
    }
};

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);

}
let handleGetAllUsers = async(req, res) => {
    let id = req.body.id;
    console.log(id)
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER',
            user: []
        })
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        user: users
    })
}
let handleEditUser = async(req, res) =>{
    try{
        let user = {
            id: req.body.id, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            roleId: req.body.roleId,
        }
        await userService.editUser(user);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
        })
    }
    catch(e){
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
let handleDeleteUser = async(req, res) =>{
    try{
        let id = req.body.id;
        await userService.deleteUser(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE'
        })
    }
    catch(e){
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
module.exports = {
    getCreateProduct: getCreateProduct,
    getEditPage: getEditPage,
    getHomePage: getHomePage,
    getOutStorePage: getOutStorePage,
    getInputStorePage: getInputStorePage,
    getCreateInputStorePage: getCreateInputStorePage,
    getLoginPage: getLoginPage,
    handleLoging: handleLoging,
    checkLoggedIn: checkLoggedIn,
    handleCreateNewUser: handleCreateNewUser,
    handleGetAllUsers: handleGetAllUsers,
    handleEditUser :handleEditUser,
    handleDeleteUser: handleDeleteUser
}