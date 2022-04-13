import adminService from '../services/adminService';

const handleCheckAdmin = async (req, res, next) => {
    let id = req.query.userID;
    let isAdmin = await adminService.checkAdmin(id)
    if(isAdmin) {
        return next();
    }
    return res.status(400).json({
        errMessage: 'You do not have permission to access'
    })
}

const handleGetOverview = async (req, res) => {
    let id = req.query.userID
    let year = req.query.year
    let type = req.query.type
    let result = await adminService.getOverview(id,year,type)
    return res.status(200).json({
        overview: result
    })
}
const handleAdminGetOrder = async (req, res) => {
    let userID = req.query.userID
    let page = req.query.page || 1
    let order = await adminService.getOrderAdmin(userID,page)
    let totalPages = Math.ceil(order.orderList.count / 10)
    return res.status(200).json({
        errCode: order.errCode,
        errMessage: order.errMessage,
        orderList: order ? order.orderList : {},
        totalPages
    })
}
const handleAdminCancelOrder = async (req, res) => {
    let id = req.query.id
    let userID = req.query.userID
    let order = await adminService.cancelOrder(id,userID)
    return res.status(200).json({
        errCode: order.errCode,
        errMessage: order.errMessage,
        orderList: order ? order.orderList : {},

    })
}
const handleAdminConfirmOrder = async (req, res) => {
    let id = req.query.id
    let userID = req.query.userID
    let order = await adminService.confirmOrder(id,userID)
    return res.status(200).json({
        errCode: order.errCode,
        errMessage: order.errMessage,
        orderList: order ? order.orderList : {}
    })
}
const handleAdminGetBooking = async (req, res) => {
    let userID = req.query.userID
    let page = req.query.page || 1
    let service = await adminService.getBookingAdmin(userID,page)
    let totalPages = Math.ceil(service.listService.count / 10)
    return res.status(200).json({
        errCode: service.errCode,
        errMessage: service.errMessage,
        listService: service ? service.listService : {},
        totalPages
    })
}
const handleGetAllUser = async (req, res) => {
    let userID = req.query.userID
    let page = req.query.page || 1
    let users = await adminService.getAllUsers(userID,page)
    let totalUserPages = Math.ceil(users.user.count / 10)
    let totalAdminPages = Math.ceil(users.admin.count / 10)
    return res.status(200).json({
        errCode: users.errCode,
        errMessage: users.errMessage,
        user: users? users.user : {},
        admin: users? users.admin : {},
        totalUserPages,
        totalAdminPages
    })
}
const handleAddNewAdmin = async (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let phonenumber = req.body.phoneNumber
    let password = req.body.password
    let password2 = req.body.password2
    if(!name || !email || !phonenumber || !password || !password2){
        return res.status(500).json({
            errCode: 1,
            message: 'Missing any parameters'
        })
    }
    let userData = await adminService.addNewAdmin(name, email, phonenumber, password, password2)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData ? userData.user : {}
    })
}

const handleGetAllProducts = async (req, res) => {
    let userID = req.query.userID
    let page = req.query.page || 1
    let products = await adminService.getAllProducts(userID,page)
    let totalPages = Math.ceil(products.product.count / 15)
    return res.status(200).json({
        errCode: products.errCode,
        errMessage: products.errMessage,
        product: products ? products.product : {},
        totalPages
    })
}

const handleGetProductSoldOut = async (req, res) => {
    let userID = req.query.userID
    let page = req.query.page || 1
    let products = await adminService.getAProductSoldOut(userID,page)
    let totalPages = Math.ceil(products.product.count / 15)
    return res.status(200).json({
        errCode: products.errCode,
        errMessage: products.errMessage,
        product: products ? products.product : {},
        totalPages
    })
}

const handleGetProductInfo = async (req, res) => {
    let userID = req.query.userID
    let productID = req.query.productID
    let product = await adminService.getProductInfo(userID,productID)
    return res.status(200).json({
        errCode: product.errCode,
        errMessage: product.errMessage,
        product: product ? product.product : {},
    })
}
const handleUpdateProduct = async (req, res) => {
    let productID = req.body.productID
    let name = req.body.name
    let type_id = req.body.type_id
    let price = req.body.price
    let desc = req.body.desc
    let quantity = req.body.quantity
    let provider = req.body.provider
    let img = req?.file?.filename || ""
    let product = await adminService.updateProduct(productID, name, type_id, price, desc,quantity,provider,img)
    return res.status(200).json({
        errCode: product.errCode,
        errMessage: product.errMessage,
        product: product ? product.product : {}
    })
}
const handleDeleteProduct = async (req, res) => {
    let id = req.query.productID
    let result = await adminService.deleteProduct(id)
    res.status(200).json({
        errCode: result.errCode,
        errMessage: result.errMessage
    })
}
module.exports = {
    handleCheckAdmin: handleCheckAdmin,
    handleGetOverview: handleGetOverview,
    handleAdminGetOrder: handleAdminGetOrder,
    handleAdminCancelOrder: handleAdminCancelOrder,
    handleAdminConfirmOrder: handleAdminConfirmOrder,
    handleAdminGetBooking: handleAdminGetBooking,
    handleGetAllUser: handleGetAllUser,
    handleAddNewAdmin: handleAddNewAdmin,
    handleGetAllProducts: handleGetAllProducts,
    handleGetProductSoldOut: handleGetProductSoldOut,
    handleGetProductInfo: handleGetProductInfo,
    handleUpdateProduct: handleUpdateProduct,
    handleDeleteProduct: handleDeleteProduct,
}