import db from "../models/index";
const { Op } = require('@sequelize/core');
let getAllProducts = (page,name,type_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = ''
            const perPage = 10
            if(type_id == 0 ){
                products = await db.Product.findAndCountAll(
                    {
                        where: {
                            [Op.and]: [
                                {
                                    name: {
                                        [Op.like]: '%'+name+'%'
                                    }
                                },
                                {
                                    desc: {
                                        [Op.like]: '%'+name+'%'
                                    }
                                }
                            ]
                        }
                        ,
                        offset: perPage * (page - 1),
                        limit: perPage,
                    },
                )
            }else{
                products = await db.Product.findAndCountAll(
                    {
                        where: { type_id: type_id },
                        offset: perPage * (page - 1),
                        limit: perPage,
                    },
                )
            }
            resolve(products)
        }
        catch (e) {
            reject(e);
        }
    })
}


let getProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: id },
            })
            resolve(product)
        } catch (e) {
            reject(e);
        }
    })
}

// let getProductByType = (type_id, page) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let products = ''
//             const perPage = 10
//             if(type_id == 0){
//                 products = await db.Product.findAndCountAll(
//                     {
//                         offset: perPage * (page - 1),
//                         limit: perPage,
//                     },
//                 )
                
//             }else{
//                 products = await db.Product.findAndCountAll(
//                     {
//                         where: { type_id: type_id },
//                         offset: perPage * (page - 1),
//                         limit: perPage,
//                     },
//                 )
                
//             }
//             resolve(products)
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

// let getProductByName = (name, page) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let products = ''
//             const perPage = 10
//             products = await db.Product.findAndCountAll(
//                 {
//                     [Op.and]: [
//                         {
//                             name: {
//                                 [Op.like]: '%' + name + '%'
//                             }
//                         },
//                         {
//                             desc: {
//                                 [Op.like]: '%' + name + '%'
//                             }
//                         }
//                     ],
//                     offset: perPage * (page - 1),
//                     limit: perPage,
//                 },
//             )
//             resolve(products)
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

module.exports = {
    getAllProducts: getAllProducts,
    getProduct: getProduct,
    // getProductByType: getProductByType,
    // getProductByName: getProductByName
}