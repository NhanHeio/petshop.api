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
module.exports = {
    handleLogin: handleLogin,
    handleSignup: handleSignup,
}