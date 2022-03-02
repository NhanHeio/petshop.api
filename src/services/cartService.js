import db from "../models/index";
let getCart = (user_id) => {
    return new Promise (async (resolve, reject) => {
        try{
            let cart = ''
            cart = await db.Cart.findOne({
                where: {user_id: user_id}
            })
            let cart_items = ''
            cart_items = await db.CartItem.findAll({
                where: { cart_id: cart.id}
            })
            cart.cartItems = cart_items
            resolve(cart)
        }catch(e){
            reject(e);
        }
    })
}


module.exports = {
    getCart: getCart,
    
}