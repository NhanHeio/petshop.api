import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import cartController from '../controllers/cartController';
import bookingController from '../controllers/bookingController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    //user
    router.post('/api/login', userController.handleLogin)
    router.post('/api/signup', userController.handleSignup)
    //product
    router.get(`/api/get-all-products`, productController.handleGetAllProducts)
    router.get(`/api/get-product`, productController.handleGetProduct)
    router.post(`/api/comment-product`, productController.handleCommentProduct)
    router.get(`/api/get-comment`, productController.handleGetComment)
    //cart
    router.get(`/api/get-cart`, cartController.handleGetCart)
    router.delete(`/api/delete-cart-product`, cartController.handleDeleteCartProduct)
    router.post(`/api/add-to-cart`, cartController.handleAddToCart)
    router.post(`/api/checkout-order`, cartController.handleCheckoutOrder)
    //payment vnpay
    router.post('/api//create_payment_url', cartController.handleCreatePayment)
    router.get('/api/vnpay_ipn',cartController.vnpay_ipn)
    router.get('/api/vnpay_return',cartController.handleReturnPayment)

    //booking
    router.get(`/api/get-booking-calendar`, bookingController.handleGetBooking)
    router.post('/api/booking', bookingController.handleBooking)

    return app.use("/", router)
}

module.exports = initWebRoutes;