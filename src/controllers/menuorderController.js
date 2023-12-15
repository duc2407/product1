import menuorderService from "../service/menuorderService";

let handleGetAllMenuOrder = async (req, res) =>{
    try {
        let allOder = await menuorderService.getAllMenuOrder()
        return res.status(200).json({
            err: 0,
            message: "OKE",
            allOder : allOder 
        })
    } catch (e) {
        return res.status(500).json({
            err: 1,
            message: e.message
        })
    }
}
let handleGetAllProductByIdOrder = async (req, res) =>{
    try {
        let id = req.body.id_order
        let Oder = await menuorderService.getMenuOrderByIdOrder(id)
        return res.status(200).json({
            err: 0,
            message: "OKE",
            Oder : Oder 
        })
    } catch (e) {
        return res.status(500).json({
            err: 1,
            message: e.message
        })
    }
}
let handleCreateMenuOrder = async (req, res) =>{
    try {
        let aboutOrder = {
            id_order: req.body.id_order,
            about_client: req.body.about_client,
            list_id_product: req.body.list_id_product,
            total_payment: req.body.total_payment,
            id_status: req.body.id_status
        }
        await menuorderService.createMenuOrder(aboutOrder)
        return res.status(200).json({
            err: 0,
            message: "OKE"
        })
    } catch (e) {
        return res.status(500).json({
            err: 1,
            message: e.message
        })
    }
}
let handleEditMenuOrder = async (req, res) =>{
    try {
        let aboutOrder = {
            id_order: req.body.id_order,
            id_status: req.body.id_status
        }
        await menuorderService.editMenuOrder(aboutOrder)
        return res.status(200).json({
            err: 0,
            message: "OKE"
        })
    } catch (e) {
        return res.status(500).json({
            err: 1,
            message: e.message
        })
    }
}
let handleDeleteMenuOrder = async (req, res) =>{
    
}
module.exports = {
    handleGetAllMenuOrder: handleGetAllMenuOrder,
    handleGetAllProductByIdOrder: handleGetAllProductByIdOrder,
    handleCreateMenuOrder: handleCreateMenuOrder,
    handleEditMenuOrder: handleEditMenuOrder,
    handleDeleteMenuOrder: handleDeleteMenuOrder
}