import db from '../models/index';

// let editProduct = (data) => {
//     return new Promise( async(resolve, reject) => {
//         try{
//                 let product = await db.Product.findOne({
//                 where: { id: data.id }
//             })
//             await product.update(data);
//             resolve(true)
//         }
//         catch(e){
//             reject(e);
//         }
//     })
// }
let updateProductById_product = (idproduct, quanlity_create, type) => {
    return new Promise(async (resolve, reject) => {
        console.log(idproduct, quanlity_create, type);
        try {
            let product;
            let quality_change = quanlity_create;

            if (type === 'add') {
                await db.Product.update(
                    { quantily: db.sequelize.literal(`quantily + ${quality_change}`) },
                    { where: { id_product: idproduct } }
                );
            }

            if (type === 'subtract') {
                await db.Product.update(
                    { quantily: db.sequelize.literal(`quantily - ${quality_change}`) },
                    { where: { id_product: idproduct } }
                );
            }

            resolve(true);
        } catch (e) {
            reject(e);
        }
    });
};
let getAllProduct = (id) => {
    return  new Promise(async (resolve, reject) => {
        console.log(id)
        try{
            let products = ""
            if(id === 'ALL'){
                products = db.Product.findAll({})
            }
            if(id && id !== 'ALL'){
                products = await db.Product.findOne({
                    where: { id_product: id}
                })
            }
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let findProductBySaling = (saling) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ""
            if(saling === 1){
                products = db.Product.findAll({
                    where: { sale: saling}
                })
            }
            // if(id && id !== 'ALL'){
            //     products = await db.Product.findOne({
            //         where: { id_product: id}
            //     })
            // }
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let findProductByidproduct = (id_product) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ""
            products = db.Product.findOne({
                where: { id_product : id_product}
            })
            // if(id && id !== 'ALL'){
            //     products = await db.Product.findOne({
            //         where: { id_product: id}
            //     })
            // }
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let findProductByType = (type) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ""
            products = db.Product.findAll({
                where: { type_product: type}
            })
            resolve(products);
        }
        catch (e) {
            reject(e);
        }
    })
}
let createNewProduct = (data) => {
    return new Promise( async(resolve, reject) => {
        try {
            await db.Product.create({
                id_product: data.id_product,
                name: data.name,
                description: data.description,
                quantily: data.quantily,
                id_size: data.id_size,
                url_img: data.url_img,
                price: data.price,
                percent_sale: data.percent_sale,
                sale: data.sale
            })
            resolve({
                errcode: 0,
                message: 'OK'
            });
        } catch (e) {
            reject(e);
        }
    })
}
let editProduct = (data) => {
    return new Promise( async(resolve, reject) => {
        try{
                let product = await db.Product.findOne({
                where: { id: data.id }
            })
            await product.update(data);
            resolve(true)
        }
        catch(e){
            reject(e);
        }
    })
}
let deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let product = await db.Product.findOne({
                where: { id: id }

            });
            await product.destroy(id);
            resolve('delete thanh cong')
        }
        catch(e){
            reject(e);
        }
    })
}
let deleteProductByIdProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let product = await db.Product.findOne({
                where: { id_product: id }

            });
            await product.destroy(id);
            resolve('delete thanh cong')
        }
        catch(e){
            reject(e);
        }
    })
}
module.exports = {
    updateProductById_product : updateProductById_product,
    deleteProductByIdProduct: deleteProductByIdProduct,
    getAllProduct: getAllProduct,
    findProductBySaling: findProductBySaling,
    findProductByidproduct: findProductByidproduct,
    findProductByType: findProductByType,
    createNewProduct: createNewProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct
}