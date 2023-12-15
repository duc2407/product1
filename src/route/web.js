import express from "express"
import userController from "../controllers/userController"
import productController from "../controllers/productController"

let router = express.Router();
let initWebRoutes = (app) => {
    router.post('/test', productController.handleUpdateCreate);

    // check server 
    // router.get('/', (req,res) => {
    //     res.send('server đã hoạt động')
    // });
    // router.get('/user', userController.getUserPage)
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    
    router.get('/user/import-product', (req, res) => {
        const idProduct = req.query.id_product;
        console.log('idProduct:', idProduct); 
        // Thực hiện xử lý với giá trị idProduct
        res.send(`nhap product with ID ${idProduct}`);
    });
    router.get('/user/export-product', (req, res) => {
        const idProduct = req.query.id_product;
        console.log('idProduct:', idProduct); 
        // Thực hiện xử lý với giá trị idProduct
        res.send(`nhap product with ID ${idProduct}`);
    });
    router.get('/product/edit-product', userController.getEditPage);
    router.put('/product/edit-product', productController.handleEditProduct);

    router.get('/user/delete-product', productController.handleDeleteProductByIdProduct);
    router.post('/product/create-product', productController.handleCreateProduct)
    router.get('/product/create-product', userController.getCreateProduct)
    router.get('/product', userController.getInputStorePage)
    router.get('/user-page',userController.checkLoggedIn);
    router.post('/user-page',userController.checkLoggedIn);
    router.get('/user',userController.checkLoggedIn);
    router.get('/login-page', userController.getLoginPage)
    router.get('/', userController.getHomePage)

    return app.use("/", router);
}
module.exports = initWebRoutes;