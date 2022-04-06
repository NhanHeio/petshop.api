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
                                },{
                                    quantity: {
                                        [Op.gt]: 0
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
            if(!product){
                resolve(product = '')
            }
            resolve(product)
        } catch (e) {
            reject(e);
        }
    })
}

let postComment = (id, name, img, content) => {
    return new Promise(async (resolve, reject) => {
        try{
            await db.Comment.create({
                user_name: name,
                user_img: img,
                product_id: id,
                content: content,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            resolve({
                errCode: 0,
                errMessage:'Post comment successfully'
            })
        }catch (e) {
            reject(e);
        }
    })
}

let getComment = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            let comments = ''
            comments = await db.Comment.findAll({
                where: {product_id: id}
            })
            resolve(comments)
        }catch (e) {
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
    postComment: postComment,
    getComment: getComment,
    // getProductByType: getProductByType,
    // getProductByName: getProductByName
}