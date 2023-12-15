import productService from '../service/productService';

let handleUpdateCreate = async(req, res) => {
    const dataIdProduct = req.body.dataIdProduct;
    const inputText = req.body.inputText;
    const actionType = req.body.actionType;
    await productService.updateProductById_product(dataIdProduct, inputText, actionType)
    return res.redirect('/product')
}
let handleGetAllProducts = async(req, res) => {
    let id = req.body.id_product;
    if(!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.getAllProduct(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleEditProductByIdProduct = async (req, res) => {
    try {
        let id1 = req.body.id_product;
        let quantity1 = req.body.quantity;
        const product = await productService.findProductByidproduct(id1);
        if (product) {
            tong = product.quantily + quantity1
            const updatedProduct = {
                id: product.id,
                id_product: product.id_product,
                name: product.name,
                description: product.description,
                quantily: quantity1, // Sửa chính tả ở đây
                id_size: product.id_size,
                url_img: product.url_img,
                price: product.price,
                percent_sale: product.percent_sale,
                sale: product.sale
            };

            await productService.editProduct(updatedProduct);

            // return res.render('home.ejs', {

            // })
            return res.status(200).json({
                errCode: 0,
                errMessage: 'OK'
            });
        } else {
            return res.status(404).json({
                errCode: 404,
                errMessage: 'Product not found'
            });
        }
    } catch (error) {
        console.error('Error in handleEditProductByIdProduct:', error);
        return res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
        });
    }
};

let handleGetAllProductSaling = async(req, res) => {
    let check = req.body.sale;
    if ( !check ) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.findProductBySaling(check);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleGetAllProductByType = async(req, res) => {
    let type = req.body.type_product;
    if ( !type ) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'MISSING REQUIRED PARAMETER'
        })
    }
    let product = await productService.findProductByType(type);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OKE',
        product: product
    })
}
let handleCreateProduct = async(req, res) => {
    let product = {
        id_product: req.body.id_product,
        name: req.body.name,
        description: req.body.description,
        quantily: req.body.quantily,
        id_size: req.body.id_size,
        url_img: req.body.url_img,
        price: req.body.price,
        percent_sale: req.body.percent_sale,
        sale: req.body.sale
    }
    console.log(product)
    let message = await productService.createNewProduct(product);
    return res.status(200).json(message);
}
let handleEditProduct = async(req, res) => {
    try {
        let product = {
            id: req.body.id,
            id_product: req.body.id_product,
            name: req.body.name,
            description: req.body.description,
            quantily: req.body.quantily,
            id_size: req.body.id_size,
            url_img: req.body.url_img,
            price: req.body.price,
            percent_sale: req.body.percent_sale,
            sale: req.body.sale
        }
        console.log(product)
        await productService.editProduct(product)
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OKE',
        })
    } 
    catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
let handleDeleteProduct = async(req, res) => {
    try{
        let id = req.body.id;
        await productService.deleteProduct(id);
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
let handleDeleteProductByIdProduct = async(req, res) => {
    try{
        let id = req.query.id_product;
        await productService.deleteProductByIdProduct(id);
        return res.redirect('back');
    }
    catch(e){
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message
        })
    }
}
module.exports = {
    handleUpdateCreate:handleUpdateCreate,
    handleDeleteProductByIdProduct: handleDeleteProductByIdProduct,
    handleGetAllProducts: handleGetAllProducts,
    handleGetAllProductSaling: handleGetAllProductSaling,
    handleGetAllProductByType: handleGetAllProductByType,
    handleCreateProduct: handleCreateProduct,
    handleEditProduct: handleEditProduct,
    handleDeleteProduct: handleDeleteProduct,
    handleEditProductByIdProduct: handleEditProductByIdProduct
}