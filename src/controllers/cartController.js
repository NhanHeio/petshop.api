import cartService from '../services/cartService';
import queryString from 'query-string';
require('dotenv').config();
const handleGetCart = async (req, res) => {
    let user_id = req.query.user_id
    let cart = await cartService.getCart(user_id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        cart
    })
}

const handleDeleteCartProduct = async (req, res) => {
    let id = req.query.id
    let cart = await cartService.deleteCartProduct(id)
    return res.status(200).json({
        cart,
        errCode: 0,
        errMessage: 'Delete successfully',
    })
}

const handleAddToCart = async (req, res) => {
    let user_id = parseInt(req.query.user_id)
    let product_id = parseInt(req.query.product_id)
    let quantity = parseInt(req.query.quantity)
    let cart = await cartService.addToCart(user_id, product_id, quantity)
    return res.status(200).json({
        cart,
        errCode: 0,
        errMessage: 'Add product to cart successfully',
    })
}

const handleCheckoutOrder = async (req, res) => {
    let user_id = parseInt(req.query.user_id)
    let name = req.body.name
    let phoneNumber = req.body.phoneNumber
    let address = req.body.address
    let order = await cartService.checkoutOrder( user_id, name, phoneNumber, address)
    return res.status(200).json({
        order,
        errCode: 0,
        errMessage: 'Checkout order successfully'
    })
}
const handleCheckoutAndPayOrder = async (req, res) => {
    let user_id = parseInt(req.query.user_id)
    let name = req.body.name
    let phoneNumber = req.body.phoneNumber
    let address = req.body.address
    let order = await cartService.checkoutAndPayOrder( user_id, name, phoneNumber, address)
    return res.status(200).json({
        order,
        errCode: 0,
        errMessage: 'Checkout order successfully'
    })
}

const handleGetOrderUser = async (req, res) => {
    let userID = req.query.userID
    let order = await cartService.getOrderUser(userID)
    return res.status(200).json({
        errCode: order.errCode,
        errMessage: order.errMessage,
        orderList: order ? order.orderList : {}
    })

}

const handleGetOrder = async (req, res) => {
    let id = req.query.id
    let orderItem = await cartService.getOrder(id)
    return res.status(200).json({
        errCode: orderItem.errCode,
        errMessage: orderItem.errMessage,
        orderItem: orderItem ? orderItem.order : {}
    })
}

const handleCancelOrder = async (req, res) => {
    let id = req.query.id
    let userID = req.query.userID
    let order = await cartService.cancelOrder(id, userID)
    return res.status(200).json({
        errCode: order.errCode,
        errMessage: order.errMessage,
        orderList: order ? order.orderList : {}
    })
}

const handleCreatePayment = (req, res, next) => {
    let ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    let dateFormat = require('dateformat');


    let tmnCode = process.env.vnp_TmnCode
    let secretKey = process.env.vnp_HashSecret
    let vnpUrl = process.env.vnp_Url
    let returnUrl = process.env.vnp_ReturnUrl

    let date = new Date();

    let createDate = dateFormat(date, 'yyyymmddHHmmss');
    let orderId = dateFormat(date, 'HHmmss');
    let amount = req.body.amount;
    let bankCode = req.body.bankCode || '';

    let orderInfo = req.body.name + ' ' + req.body.phoneNumber + ' ' + req.body.address;
    let orderType = 270000;
    let locale = req.body.language;
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    let currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    let signData = queryString.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + queryString.stringify(vnp_Params, { encode: false });

    res.redirect(vnpUrl)
}

const vnpay_ipn = async (req, res, next) => {
    let vnp_Params = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    let secretKey = process.env.vnp_HashSecret
    let signData = queryString.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");


    if (secureHash === signed) {
        let orderId = vnp_Params['vnp_TxnRef'];
        let rspCode = vnp_Params['vnp_ResponseCode'];
        //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        res.status(200).json({ RspCode: '00', Message: 'success' })
    }
    else {
        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' })
    }
}

const handleReturnPayment = (req, res, next) => {
    let vnp_Params = req.query;

    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let tmnCode = process.env.vnp_TmnCode
    let secretKey = process.env.vnp_HashSecret

    let signData = queryString.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

    if (secureHash === signed) {

        res.render('success', { code: vnp_Params['vnp_ResponseCode'] })
    } else {
        res.render('success', { code: '97' })
    }
}

function sortObject(obj) {
	var sorted = {};
	var str = [];
	var key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

module.exports = {
    handleGetCart: handleGetCart,
    handleDeleteCartProduct: handleDeleteCartProduct,
    handleAddToCart: handleAddToCart,
    handleCheckoutOrder: handleCheckoutOrder,
    handleCheckoutAndPayOrder: handleCheckoutAndPayOrder,
    handleGetOrderUser: handleGetOrderUser,
    handleGetOrder: handleGetOrder,
    handleCancelOrder: handleCancelOrder,
    handleCreatePayment: handleCreatePayment,
    vnpay_ipn: vnpay_ipn,
    handleReturnPayment: handleReturnPayment,
}