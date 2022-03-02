import db from "../models/index";
let getAllProducts = (page) => {
    return new Promise(async (resolve, reject) => {
        try{
            let products = ''
            const perPage = 10

                products = await db.Product.findAll(
                    {
                        offset: perPage * (page - 1),
                        limit: perPage ,
                    },
                )
            resolve(products)
        }
        catch(e){
            reject(e);
        }
    })
}

let getProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let product = await db.Product.findOne({
                where: {id: id},
            })
            resolve(product)
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    getAllProducts: getAllProducts,
    getProduct: getProduct
}