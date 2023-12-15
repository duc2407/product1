import db from '../models/index';

let getAllMenuOrder = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let allMenu = await db.Menuorder.findAll({})
            resolve(allMenu)
        }
        catch (e) {
            reject(e);
        }
    })
}
let getMenuOrderByIdOrder = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let order = await db.Menuorder.findOne({
                where: {id_order: id}
            })
            resolve(order);
        } catch (e) {
            reject(e)
        }
    })
}
let createMenuOrder = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            await db.Menuorder.create({
                id_order: data.id_order,
                about_client: data.about_client,
                list_id_product: data.list_id_product,
                total_payment: data.total_payment,
                id_status: data.id_status
            })
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}
let editMenuOrder = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            let order = await db.Menuorder.findOne({
                where: { id_order: data.id_order}
            })
            await order.update(data)
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllMenuOrder: getAllMenuOrder,
    getMenuOrderByIdOrder: getMenuOrderByIdOrder,
    createMenuOrder: createMenuOrder,
    editMenuOrder: editMenuOrder
}