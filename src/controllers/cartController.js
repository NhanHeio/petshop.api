import cartService from '../services/cartService';
import queryString from 'query-string';
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
    let cart = await cartService.addToCart(user_id,product_id,quantity)
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
    let order = await cartService.checkoutOrder(user_id,name,phoneNumber,address)
    return res.status(200).json({
        order,
        errCode: 0,
        errMessage: 'Checkout order successfully'
    })
}

const handleCreatePayment = (req, res, next) => {
    var ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var config = require('config');
    var dateFormat = require('dateformat');

    
    var tmnCode = config.get('vnp_TmnCode');
    var secretKey = config.get('vnp_HashSecret');
    var vnpUrl = config.get('vnp_Url');
    var returnUrl = config.get('vnp_ReturnUrl');

    var date = new Date();

    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    var amount = req.body.amount;
    var bankCode = req.body.bankCode;
    
    var orderInfo = req.body.orderDescription;
    var orderType = req.body.orderType;
    var locale = req.body.language;
    if(locale === null || locale === ''){
        locale = 'vn';
    }
    var currCode = 'VND';
    var vnp_Params = {};
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
    if(bankCode !== null && bankCode !== ''){
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    var signData = queryString.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");     
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex"); 
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + queryString.stringify(vnp_Params, { encode: false });

    res.redirect(vnpUrl)
}

const vnpay_ipn = async (req, res, next) => {
    var vnp_Params = req.query;
    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    var config = require('config');
    var secretKey = config.get('vnp_HashSecret');
    var signData = queryString.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");     
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     
     

    if(secureHash === signed){
        var orderId = vnp_Params['vnp_TxnRef'];
        var rspCode = vnp_Params['vnp_ResponseCode'];
        //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        res.status(200).json({RspCode: '00', Message: 'success'})
    }
    else {
        res.status(200).json({RspCode: '97', Message: 'Fail checksum'})
    }
}

const handleReturnPayment = (req, res, next) => {
    var vnp_Params = req.query;

    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    var config = require('config');
    var tmnCode = config.get('vnp_TmnCode');
    var secretKey = config.get('vnp_HashSecret');

    var signData = queryString.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");     
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     

    if(secureHash === signed){

        res.render('success', {code: vnp_Params['vnp_ResponseCode']})
    } else{
        res.render('success', {code: '97'})
    }
}

module.exports = {
    handleGetCart: handleGetCart,
    handleDeleteCartProduct: handleDeleteCartProduct,
    handleAddToCart: handleAddToCart,
    handleCheckoutOrder: handleCheckoutOrder,
    handleCreatePayment: handleCreatePayment,
    vnpay_ipn: vnpay_ipn,
    handleReturnPayment: handleReturnPayment,
}