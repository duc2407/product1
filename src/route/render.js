import express from "express"
import userController from "../controllers/userController"
import productController from "../controllers/productController"
import sizeController from "../controllers/sizeController"
import typeController from "../controllers/typeController"
import statusController from "../controllers/statusController"
import menuorderController from "../controllers/menuorderController"

let router = express.Router();
let initWebRoutes = (app) => {
    router.post('/login', userController.handleLoging);
    
    // Thêm sửa xóa tìm kiếm user
    router.post('/create-new-user', userController.handleCreateNewUser);
    router.get('/get-all-user', userController.handleGetAllUsers);
    router.put('/edit-user', userController.handleEditUser);
    router.delete('/delete-user', userController.handleDeleteUser);

    // thêm sửa xóa tìm kiếm sản phẩm 
    router.get('/get-all-product', productController.handleGetAllProducts);
    router.get('/get-all-product-saling', productController.handleGetAllProductSaling);
    router.get('/get-all-product-by-type', productController.handleGetAllProductByType);
    router.post('/create-product', productController.handleCreateProduct);
    router.put('/edit-product', productController.handleEditProduct);
    router.delete('/delete-product', productController.handleDeleteProduct);

    // thêm, sửa, xóa size hàng
    router.get('/get-all-size', sizeController.handleGetAllSize);
    router.get('/get-size-by-id-size', sizeController.handleGetSizeById)
    router.post('/create-size', sizeController.handleCreateSize);
    router.put('/edit-size', sizeController.handleEditSize);
    router.delete('/delete-size', sizeController.handleDeleteSize);

    // thêm, sửa, xóa danh mục sản phẩm 
    router.get('/get-all-type-product', typeController.handleGetAllType);
    router.put('/edit-type-product', typeController.handleEditType);
    router.post('/create-type-product', typeController.handleCreateType);
    router.delete('/delete-type-product', typeController.handleDeleteType);

    // thêm, sửa, xóa trạng thái đơn hàng 
    router.get('/get-all-status', statusController.handleGetAllStatus);
    router.put('/edit-status', statusController.handleEditStatus);
    router.post('/create-status', statusController.handleCreateStatus);
    router.delete('/delete-status', statusController.handleDeleteStatus);

    // thêm, sửa, xóa, tìm kiếm đơn hàng theo mã đơn hàng 
    router.get('/get-all-menu-order', menuorderController.handleGetAllMenuOrder);
    router.get('/get-all-product-by-number-order', menuorderController.handleGetAllProductByIdOrder);
    router.post('/create-menu-order', menuorderController.handleCreateMenuOrder);
    router.put('/edit-menu-order', menuorderController.handleEditMenuOrder);
    router.delete('/delete-menu-order', menuorderController.handleDeleteMenuOrder);

    // check server 
    router.get('/', (req,res) => {
        res.render(home.ejs)
    }); 

    return app.use("/", router);
}
module.exports = initWebRoutes;