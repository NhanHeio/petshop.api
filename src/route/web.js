import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import cartController from '../controllers/cartController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    //user
    router.post('/api/login', userController.handleLogin)
    router.post('/api/signup', userController.handleSignup)
    //product
    router.get(`/api/get-all-products`, productController.handleGetAllProducts)
    router.get(`/api/get-product`, productController.handleGetProduct)
    //cart
    router.get(`/api/get-cart`, cartController.handleGetCart)

    return app.use("/", router)
}

module.exports = initWebRoutes;