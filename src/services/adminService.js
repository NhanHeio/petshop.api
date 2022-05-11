import db from "../models/index";
const { Op } = require('@sequelize/core');
const bcrypt = require('bcrypt');

let checkAdmin = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let admin = await db.User.findOne({
                where: { id: id }
            })
            if (admin) {
                if (admin.role_id === 1 || admin.role_id === 2) {
                    resolve(true)
                }
                resolve(false)
            }
            resolve(false)
        } catch (e) {
            reject(e);
        }
    })
}

let getOverview = (id, year, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = {}
            let overview = {}
            let pieChart = {}
            let lineChart = {}
            let Order = []
            let Booking = []
            let admin = await db.User.findOne({
                where: { id: id }
            })
            if (admin) {
                if (admin.role_id === 1 || admin.role_id === 2) {
                    //overview
                    overview.newUsers = await db.User.count({
                        where: {
                            createdAt: {
                                [Op.gte]: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
                            }
                        }
                    })
                    overview.newOrders = await db.Order.count({
                        where: {
                            createdAt: {
                                [Op.gte]: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
                            }
                        }
                    })
                    overview.newBookings = await db.Booking.count({
                        where: {
                            createdAt: {
                                [Op.gte]: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
                            }
                        }
                    })

                    //pie chart
                    pieChart.Dog = await db.Sold.count({
                        where: { type_id: 4 }
                    })
                    pieChart.Cat = await db.Sold.count({
                        where: { type_id: 14 }
                    })
                    pieChart.Fish = await db.Sold.count({
                        where: { type_id: 24 }
                    })
                    pieChart.Small = await db.Sold.count({
                        where: { type_id: 34 }
                    })
                    pieChart.Reptile = await db.Sold.count({
                        where: { type_id: 44 }
                    })
                    pieChart.Bird = await db.Sold.count({
                        where: { type_id: 54 }
                    })
                    //line chart
                    console.log(type)
                    if (type == 1) {
                        for (let i = 0; i <= 3; i++) {
                            Order[i] = await db.Order.count({
                                where: {
                                    [Op.and]: [{
                                        createdAt: {
                                            [Op.gte]: new Date(year.toString() + '/' + (i * 2 + i + 1).toString()),
                                        }

                                    }, {
                                        createdAt: {
                                            [Op.lt]: new Date(new Date(year.toString() + '/' + (i * 2 + i + 1).toString()).getTime() + 90 * 24 * 60 * 60 * 1000)
                                        }
                                    }]
                                }
                            })
                            Booking[i] = await db.Booking.count({
                                where: {
                                    [Op.and]: [{
                                        createdAt: {
                                            [Op.gte]: new Date(year.toString() + '/' + (i * 2 + i + 1).toString()),
                                        }

                                    }, {
                                        createdAt: {
                                            [Op.lt]: new Date(new Date(year.toString() + '/' + (i * 2 + i + 1).toString()).getTime() + 90 * 24 * 60 * 60 * 1000)
                                        }
                                    }]
                                }
                            })
                        }
                        lineChart = {
                            Order,
                            Booking
                        }
                    } else {
                        for (let i = 0; i <= 11; i++) {
                            Order[i] = await db.Order.count({
                                where: {
                                    [Op.and]: [{
                                        createdAt: {
                                            [Op.gte]: new Date(year.toString() + '/' + (i + 1).toString()),
                                        }

                                    }, {
                                        createdAt: {
                                            [Op.lt]: new Date(new Date(year.toString() + '/' + (i + 1).toString()).getTime() + 30 * 24 * 60 * 60 * 1000)
                                        }
                                    }]
                                }
                            })
                            Booking[i] = await db.Booking.count({
                                where: {
                                    [Op.and]: [{
                                        createdAt: {
                                            [Op.gte]: new Date(year.toString() + '/' + (i + 1).toString()),
                                        }

                                    }, {
                                        createdAt: {
                                            [Op.lt]: new Date(new Date(year.toString() + '/' + (i + 1).toString()).getTime() + 30 * 24 * 60 * 60 * 1000)
                                        }
                                    }]
                                }
                            })
                        }
                        lineChart = {
                            Order,
                            Booking
                        }
                    }
                }
            }
            resolve(result = {
                overview,
                pieChart,
                lineChart,
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getOrderAdmin = (userID, page, view) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = {}
            const perPage = 10
            let orderList = ''
            let admin = await db.User.findOne({
                where: { id: userID }
            })
            if (admin) {
                if (admin.role_id === 1 || admin.role_id === 2) {
                    if (view == 2) {
                        orderList = await db.Order.findAndCountAll({
                            where: {
                                status: {
                                    [Op.or]: [
                                        'Paid',
                                        'Confirmed',
                                    ]
                                }
                            },
                            offset: perPage * (page - 1),
                            limit: perPage,
                            order: [['createdAt', 'DESC']]
                        })
                    } else {
                        orderList = await db.Order.findAndCountAll({
                            offset: perPage * (page - 1),
                            limit: perPage,
                            order: [['createdAt', 'DESC']]
                        })
                    }
                    resolve(order = {
                        errCode: 0,
                        errMessage: 'Get list order successfully!',
                        orderList
                    })
                }
                resolve(order = {
                    errCode: 2,
                    errMessage: 'You are not admin!'
                })
            }
            resolve(order = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let cancelOrder = (id, userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = {}
            let orderList = ''
            let user = await db.User.findOne({
                where: { id: userID }
            })
            if (user) {
                if (user.role_id === 1 || user.role_id === 2) {
                    await db.Order.update({
                        status: 'Cancel'
                    }, {
                        where: { id: id }
                    })
                    orderList = await db.Order.findAll({
                    })
                    resolve(order = {
                        errCode: 0,
                        errMessage: 'Cancel order successfully!',
                        orderList
                    })
                }
                resolve(order = {
                    errCode: 2,
                    errMessage: 'You are not admin!'
                })
            }
            resolve(order = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let confirmOrder = (id, userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = {}
            let orderList = ''
            let user = await db.User.findOne({
                where: { id: userID }
            })
            if (user) {
                if (user.role_id === 1 || user.role_id === 2) {
                    await db.Order.update({
                        status: 'Confirmed'
                    }, {
                        where: { id: id }
                    })
                    orderList = await db.Order.findAll({
                    })
                    resolve(order = {
                        errCode: 0,
                        errMessage: 'Confirm order successfully!',
                        orderList
                    })
                }
                resolve(order = {
                    errCode: 2,
                    errMessage: 'You are not admin!'
                })
            }
            resolve(order = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getBookingAdmin = (userID, page, view) => {
    return new Promise(async (resolve, reject) => {
        try {
            let service = {}
            const perPage = 10
            let listService = ''
            let user = await db.User.findOne({
                where: { id: userID }
            })
            if (user) {
                if (user.role_id === 1 || user.role_id === 2) {
                    if(view == 2){
                        listService = await db.Booking.findAndCountAll({
                            where: {
                                date_for_compare: {
                                    [Op.gt]: new Date()
                                }
                            },
                            offset: perPage * (page - 1),
                            limit: perPage,
                            order: [['createdAt', 'DESC']]
                        })
                    }else{
                        listService = await db.Booking.findAndCountAll({
                            offset: perPage * (page - 1),
                            limit: perPage,
                            order: [['createdAt', 'DESC']]
                        })
                    }
                    resolve(service = {
                        errCode: 0,
                        errMessage: 'Get list service by user successfully!',
                        listService
                    })
                }
                resolve(service = {
                    errCode: 2,
                    errMessage: 'You are not admin!'
                })
            }
            resolve(service = {
                errCode: 1,
                errMessage: 'Could not find user!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = (userID, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = {}
            let user = ''
            let admin = ''
            const perPage = 10
            let isAdmin = await db.User.findOne({
                where: { id: userID }
            })
            if (isAdmin) {
                if (isAdmin.role_id === 1 || isAdmin.role_id === 2) {
                    admin = await db.User.findAndCountAll({
                        attributes: { exclude: ['password'] },
                        where: {
                            [Op.or]: [
                                { role_id: 1 },
                                { role_id: 2 }
                            ]
                        },
                        offset: perPage * (page - 1),
                        limit: perPage,
                    })
                    user = await db.User.findAndCountAll({
                        attributes: { exclude: ['password'] },
                        where: { role_id: 3 },
                        offset: perPage * (page - 1),
                        limit: perPage,
                    })
                    resolve(users = {
                        errCode: 0,
                        errMessage: 'Get all user by admin successfully!',
                        user,
                        admin
                    })
                }
                resolve(users = {
                    errCode: 2,
                    errMessage: 'You are not allowed to access this page!'
                })
            }
            resolve(users = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let addNewAdmin = (name, email, phonenumber, password, password2) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let userExist = await checkUserEmail(email)
            if (!userExist) {
                if (checkPhoneNumber(phonenumber)) {
                    if (password === password2) {
                        const salt = bcrypt.genSaltSync(10);
                        const passwordBcrypt = bcrypt.hashSync(password, salt);
                        await db.User.create({
                            name: name,
                            phone_number: phonenumber,
                            email: email,
                            role_id: 2,
                            password: passwordBcrypt,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        })
                        userData = {
                            errCode: 0,
                            message: 'Add new administrator successfully!',
                            user: {
                                name: name,
                                email: email,
                            },
                        }
                    } else {
                        userData = {
                            errCode: 5,
                            message: 'Password confirmation failed'
                        }
                    }
                } else {
                    userData = {
                        errCode: 7,
                        message: 'Phone Number is not correct or used'
                    }
                }

            } else {
                userData = {
                    errCode: 6,
                    message: `Your's email was used!`
                }
            }
            resolve(userData)

        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let checkPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length == 10) {
        return true;
    } else {
        return false;
    }
}

let getAllProducts = (userID, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = {}
            let product = ''
            const perPage = 15
            let isAdmin = await db.User.findOne({
                where: { id: userID }
            })
            if (isAdmin) {
                if (isAdmin.role_id === 1 || isAdmin.role_id === 2) {
                    product = await db.Product.findAndCountAll({
                        offset: perPage * (page - 1),
                        limit: perPage,
                    })
                    resolve(products = {
                        errCode: 0,
                        errMessage: 'Get all user by admin successfully!',
                        product
                    })
                }
                resolve(products = {
                    errCode: 2,
                    errMessage: 'You are not allowed to access this page!'
                })
            }
            resolve(products = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAProductSoldOut = (userID, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = {}
            let product = ''
            const perPage = 15
            let isAdmin = await db.User.findOne({
                where: { id: userID }
            })
            if (isAdmin) {
                if (isAdmin.role_id === 1 || isAdmin.role_id === 2) {
                    product = await db.Product.findAndCountAll({
                        where: {
                            quantity: { [Op.lt]: 10 }
                        }
                    },
                        {
                            offset: perPage * (page - 1),
                            limit: perPage,
                        })
                    resolve(products = {
                        errCode: 0,
                        errMessage: 'Get all user by admin successfully!',
                        product
                    })
                }
                resolve(products = {
                    errCode: 2,
                    errMessage: 'You are not allowed to access this page!'
                })
            }
            resolve(products = {
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getProductInfo = (userID, productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = ''
            let isAdmin = await db.User.findOne({
                where: { id: userID }
            })
            if (isAdmin) {
                if (isAdmin.role_id === 1 || isAdmin.role_id === 2) {
                    product = await db.Product.findOne({
                        where: { id: productID }
                    })
                    if (product) {
                        resolve({
                            errCode: 0,
                            errMessage: 'Get product information successfully!',
                            product
                        })
                    }
                    resolve({
                        errCode: 3,
                        errMessage: 'Product is not available!'
                    })
                }
                resolve({
                    errCode: 2,
                    errMessage: 'You are not allowed to access this page!'
                })
            }
            resolve({
                errCode: 1,
                errMessage: 'User not found!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let updateProduct = (productID, name, type_id, price, desc, quantity, provider, img) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: productID }
            })
            if (product) {
                console.log(img)
                if (img) {
                    await db.Product.update({
                        name: name,
                        type_id: type_id,
                        price: price,
                        desc: desc,
                        quantity: quantity,
                        provider: provider,
                        img: img,
                        updatedAt: new Date()
                    }, {
                        where: { id: productID }
                    })
                } else {
                    await db.Product.update({
                        name: name,
                        type_id: type_id,
                        price: price,
                        desc: desc,
                        quantity: quantity,
                        provider: provider,
                        updatedAt: new Date()
                    }, {
                        where: { id: productID }
                    })
                }
                product = await db.Product.findOne({
                    where: { id: productID }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Update product successfully!',
                    product
                })
            } else {
                await db.Product.create({
                    name: name,
                    type_id: type_id,
                    price: price,
                    desc: desc,
                    quantity: quantity,
                    provider: provider,
                    img: img,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'Update product successfully!',
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { id: id }
            })
            if (product) {
                await db.Product.destroy({
                    where: {
                        id: id
                    }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Delete product successfully!',
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Product not found!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    checkAdmin: checkAdmin,
    getOverview: getOverview,
    getOrderAdmin: getOrderAdmin,
    cancelOrder: cancelOrder,
    confirmOrder: confirmOrder,
    getBookingAdmin: getBookingAdmin,
    getAllUsers: getAllUsers,
    addNewAdmin: addNewAdmin,
    getAllProducts: getAllProducts,
    getAProductSoldOut: getAProductSoldOut,
    getProductInfo: getProductInfo,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
}