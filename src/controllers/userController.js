import userService from '../services/userService'
const handleLogin = async (req,res) => {
    let email = req.body.email
    let password = req.body.password

    if(!email || !password){
        return res.status(500).json({
            errCode: 1,
            message: 'Missing email or password'
        })
    }
    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData ? userData.user : {}
    })
}
const handleSignup = async (req, res) => {
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
    let userData = await userService.handleUserSignup(name, email, phonenumber, password, password2)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData ? userData.user : {}
    })
}

const handleUpdateUserInfo = async (req, res) => {
    let name = req.query.name
    let email = req.query.email
    let phoneNumber = req.query.phoneNumber
    let address = req.query.address
    if(!name || !email || !phoneNumber || !address){
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing any parameters!'
        })
    }
    let userData = await userService.updateUserInfo(name, email, phoneNumber, address)
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData ? userData.user : {}
    })
}

const handleUploadAvatar = async (req, res) => {
    let email = req.body.email
    let img = req.file.filename
    let userData = await userService.updateUserAvatar(email, img)
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData ? userData.user : {}
    })
}

const handleUpdateUserPassword = async (req, res) => {
    let email = req.query.email
    let oldPassword = req.query.oldPassword
    let newPassword = req.query.newPassword
    let newPassword2 = req.query.newPassword2
    let userData = await userService.handleUpdateUserPassword(email,oldPassword,newPassword,newPassword2)
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleSignup: handleSignup,
    handleUpdateUserInfo: handleUpdateUserInfo,
    handleUploadAvatar: handleUploadAvatar,
    handleUpdateUserPassword: handleUpdateUserPassword,
}