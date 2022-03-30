import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import cartController from '../controllers/cartController';
import bookingController from '../controllers/bookingController';
import adminController from '../controllers/adminController';
const uploadAvatar = require('../middleware/uploadAvatar');
const uploadProduct = require('../middleware/uploadProduct');

let router = express.Router();


let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    //send-file
    router.get('/api/user/:name', function (req, res) {
        let name = req.params.name
        res.sendFile(`public/assets/avatar/` + name, { root: '.' })
    })
    router.get('/api/product/:name', function (req, res) {
        let name = req.params.name
        res.sendFile(`public/assets/product/` + name, { root: '.' })
    })
    //user
    router.post('/api/login', userController.handleLogin)
    router.post('/api/signup', userController.handleSignup)
    router.post('/api/update-user-info', userController.handleUpdateUserInfo)
    router.post('/api/upload-avatar', uploadAvatar.single("image"), userController.handleUploadAvatar)
    router.post('/api/update-user-password', userController.handleUpdateUserPassword)
    //product
    router.get(`/api/get-all-products`, productController.handleGetAllProducts)
    router.get(`/api/get-product`, productController.handleGetProduct)
    router.post(`/api/comment-product`, productController.handleCommentProduct)
    router.get(`/api/get-comment`, productController.handleGetComment)

    //order-cart
    router.get(`/api/get-cart`, cartController.handleGetCart)
    router.delete(`/api/delete-cart-product`, cartController.handleDeleteCartProduct)
    router.post(`/api/add-to-cart`, cartController.handleAddToCart)
    router.post(`/api/checkout-order`, cartController.handleCheckoutOrder)
    router.get(`/api/get-order/user`, cartController.handleGetOrderUser)
    router.get(`/api/get-order/order`, cartController.handleGetOrder)
    router.post(`/api/cancel-order`, cartController.handleCancelOrder)

    //payment vnpay
    router.post('/api//create_payment_url', cartController.handleCreatePayment)
    router.get('/api/vnpay_ipn', cartController.vnpay_ipn)
    router.get('/api/vnpay_return', cartController.handleReturnPayment)

    //booking
    router.get(`/api/get-booking-calendar`, bookingController.handleGetBooking)
    router.post('/api/booking', bookingController.handleBooking)
    router.get(`/api/get-booking/user`, bookingController.handleGetBookingUser)
    router.post('/api/cancel-booking', bookingController.handleCancelBooking)

    //admin
    router.get('/api/admin/get-overview',adminController.handleCheckAdmin, adminController.handleGetOverview)
    router.get('/api/admin/get-order',adminController.handleCheckAdmin,  adminController.handleAdminGetOrder)
    router.post('/api/admin/cancel-order',adminController.handleCheckAdmin,  adminController.handleAdminCancelOrder)
    router.post('/api/admin/confirm-order',adminController.handleCheckAdmin,  adminController.handleAdminConfirmOrder)
    router.get('/api/admin/get-booking',adminController.handleCheckAdmin,  adminController.handleAdminGetBooking)
    router.get('/api/admin/get-all-user',adminController.handleCheckAdmin, adminController.handleGetAllUser)
    router.post('/api/admin/add-new-admin',adminController.handleCheckAdmin, adminController.handleAddNewAdmin)
    router.get('/api/admin/get-all-products',adminController.handleCheckAdmin, adminController.handleGetAllProducts)
    router.get('/api/admin/get-product-info',adminController.handleCheckAdmin, adminController.handleGetProductInfo)
    router.post('/api/admin/update-product', uploadProduct.single("image"), adminController.handleUpdateProduct)
    return app.use("/", router)
}

module.exports = initWebRoutes;