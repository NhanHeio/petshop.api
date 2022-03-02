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

module.exports = {
    handleGetCart: handleGetCart,
}