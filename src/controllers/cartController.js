import cartService from '../services/cartService';
const handleGetCart = async (req, res) => {
    let user_id = req.query.user_id
    let cart = await cartService.getCart(user_id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        cart
    })
}

const handleDeleteCartProduct = async (req, res) => {
    let id = req.query.id
    let cart = await cartService.deleteCartProduct(id)
    return res.status(200).json({
        cart,
        errCode: 0,
        errMessage: 'Delete successfully',
    })
}

const handleAddToCart = async (req, res) => {
    let user_id = parseInt(req.query.user_id)
    let product_id = parseInt(req.query.product_id)
    let quantity = parseInt(req.query.quantity)
    let cart = await cartService.addToCart(user_id,product_id,quantity)
    return res.status(200).json({
        cart,
        errCode: 0,
        errMessage: 'Add product to cart successfully',
    })
}

const handleCheckoutOrder = async (req, res) => {
    let user_id = parseInt(req.query.user_id)
    let order = await cartService.checkoutOrder(user_id)
    return res.status(200).json({
        order,
        errCode: 0,
        errMessage: 'Checkout order successfully'
    })
}

module.exports = {
    handleGetCart: handleGetCart,
    handleDeleteCartProduct: handleDeleteCartProduct,
    handleAddToCart: handleAddToCart,
    handleCheckoutOrder: handleCheckoutOrder
}