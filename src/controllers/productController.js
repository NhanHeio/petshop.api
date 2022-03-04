import productService from '../services/productService';
const handleGetAllProducts = async (req, res) => {
    let page = req.query.page || 1;
    let name = req.query.name || '';
    let type_id = req.query.type_id || 0;
    let products = await productService.getAllProducts(page,name,type_id);
    let totalPages = Math.ceil(products.count / 10)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        products,
        totalPages
    })
}

// const handleGetType = async (req, res) => {
//     let type = await productService.getType()
//     return res.status(200).json({
//         errCode: 0,
//         errMessage: 'OK',
//         type
//     })
// }

const handleGetProduct = async (req, res) => {
    let id = req.query.id;
    let product = await productService.getProduct(id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        product
    })
}

// const handleGetProductByType = async (req, res) => {
//     let type_id = req.query.type_id
//     let page = req.query.page || 1
//     let products = await productService.getProductByType(type_id, page)
//     let totalPages = Math.ceil(products.count / 10)
//     return res.status(200).json({
//         errCode: 0,
//         errMessage: 'OK',
//         products,
//         totalPages
//     })
// }

// const handleGetProductByName = async (req, res) => {
//     let name = req.body.name
//     let page = req.query.page || 1
//     let products = await productService.getProductByName(name, page)
//     let totalPages = Math.ceil(products.count / 10)
//     return res.status(200).json({
//         errCode: 0,
//         errMessage: 'OK',
//         products,
//         totalPages
//     })
// }

module.exports = {
    handleGetAllProducts: handleGetAllProducts,
    handleGetProduct: handleGetProduct,
    // handleGetProductByType: handleGetProductByType,
    // handleGetProductByName: handleGetProductByName
}