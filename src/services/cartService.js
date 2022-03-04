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

let deleteCartProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            // let cartItem = await db.CartItem.findOne({
            //     where: {id: id}
            // })
            // await Cart
            let product = await db.CartItem.findOne({
                where: { product_id: id },
            })
            let price = product.price
            let cart_id = product.cart_id
            let quantity = product.quantity
            let cart = await db.Cart.findOne({
                where: {id: cart_id},
                raw: false,
            })
            if(cart){
                cart.quantity = cart.quantity - quantity
                cart.total_price = cart.total_price - price
            }
            await cart.save()
            await db.CartItem.destroy({
                where: {id: id}
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

let addToCart = (user_id,product_id,quantity) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findOne({
                where: {user_id: user_id}
            })
            if(!cart){
                await db.Cart.create({
                    user_id: user_id,
                    quantity: 0,
                    total_price: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                cart = await db.Cart.findOne({
                    where: {user_id: user_id}
                })
            }
            let product = await db.Product.findOne({
                where: {id: product_id},
            })
            if(product.quantity > quantity) {
                await db.Product.update({
                    quantity: product.quantity - quantity,
                    updatedAt: new Date()
                },{
                    where: {id: product_id},
                })
                product.quantity = product.quantity - quantity
                let cart_id = cart.id
                let product_name = product.name
                let product_price = product.price
                let product_img = product.img
                db.CartItem.create({
                    cart_id: cart_id,
                    product_id: product_id,
                    product_name: product_name,
                    img: product_img,
                    price: product_price,
                    quantity: quantity,
                })
                db.Cart.update({
                    quantity: cart.quantity + quantity,
                    total_price: cart.total_price + product_price * quantity,
                    updatedAt: new Date()
                },{
                    where: {id: cart_id}
                })       
                
            }else{
                resolve({
                    errCode: 1,
                    errMessage: 'Product no available'
                })
            }
            resolve(cart)
        }catch(e){
            reject(e);
        }
    })
}

let checkoutOrder = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: user_id}
            })
            console.log(user)

            let cart = await db.Cart.findOne({
                where: { user_id: user_id}
            })

            console.log(cart)
            let cartItems = await db.CartItem.findAll({
                where: { cart_id: cart.id},
            })
            console.log(cartItems)

            await db.Order.create({
                user_id: user_id,
                username: user.name,
                address: user.address,
                total_price: cart.total_price,
                status: "Waiting for confirm",
                createdAt: new Date(),
                updatedAt: new Date()
            })
            let order = await db.Order.findOne({
                where: {user_id: user_id},
                order: [
                    ['id','DESC']
                ]
            })

            await cartItems.forEach(item => {
                    db.OrderItem.create({
                    order_id: order.id,
                    product_id: item.product_id,
                    product_name: item.product_name,
                    price: item.price,
                    quantity: item.quantity,
                    img: item.img,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                db.CartItem.destroy({
                    where: {id: item.id},
                })
            });
            await db.Cart.destroy({
                where: {user_id: user_id}
            })
            resolve(order)
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    getCart: getCart,
    deleteCartProduct: deleteCartProduct,
    addToCart: addToCart,
    checkoutOrder: checkoutOrder
}