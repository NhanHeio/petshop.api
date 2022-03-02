import productService from '../services/productService';
const handleGetAllProducts = async (req, res) => {
    let page = req.query.page || 1;
    let products = await productService.getAllProducts(page);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        products
    })
}

const handleGetProduct = async (req, res) => {
    let id = req.query.id;
    let product = await productService.getProduct(id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        product
    })
}
module.exports = {
    handleGetAllProducts: handleGetAllProducts,
    handleGetProduct: handleGetProduct,
}