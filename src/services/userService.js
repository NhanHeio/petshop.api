import db from "../models/index";
const bcrypt = require('bcrypt');
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let userExist = await checkUserEmail(email)
            if (userExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.message = 'Ok!';
                        delete user.password;
                        userData.user = user;

                    } else {
                        userData.errCode = 3;
                        userData.message = 'Wrong password!'
                    }
                } else {
                    userData.errCode = 2
                    userData.message = `User not found`
                }
            } else {
                userData.errCode = 1
                userData.message = `Your's email isn't exist. Please enter correct email`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}


let handleUserSignup = (name, email, phonenumber, password, password2) => {
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
                            role_id: 3,
                            password: passwordBcrypt,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        })
                        userData = {
                            errCode: 0,
                            message: 'OK!',
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

let updateUserInfo = (name, email, phoneNumber, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userInfo = {}
            let user = ''
            user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                await db.User.update({
                    name: name,
                    phone_number: phoneNumber,
                    address: address,
                    updatedAt: new Date()
                }, {
                    where: { email: email }
                })
                user = await db.User.findOne({
                    where: { email: email }
                })
                delete user.password;

                resolve(userInfo = {
                    user,
                    errCode: 0,
                    errMessage: 'Update user successfully!'
                })
            } else {
                resolve(userInfo = {
                    errCode: 1,
                    errMessage: 'Could not find user'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserAvatar = (email, img) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userInfo = {}
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                await db.User.update({
                    img: img,
                    updatedAt: new Date()
                }, {
                    where: { email: email }
                })
                user = await db.User.findOne({
                    where: { email: email }
                })
                delete user.password;
                resolve(userInfo = {
                    errCode: 0,
                    errMessage: 'Update avatar successfully!',
                    user
                })
            } else {
                resolve(userInfo = {
                    errCode: 1,
                    errMessage: 'Could not find user!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let handleUpdateUserPassword = (email, oldPassword, newPassword, newPassword2) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = ''
            let userData = {}
            let userExist = await checkUserEmail(email)
            if (userExist) {
                user = await db.User.findOne({
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(oldPassword, user.password);
                    if (check) {
                        if (newPassword === newPassword2) {
                            const salt = bcrypt.genSaltSync(10);
                            const passwordBcrypt = bcrypt.hashSync(newPassword, salt);
                            await db.User.update({
                                password: passwordBcrypt,
                                updatedAt: new Date()
                            },{
                                where: { email: email }
                            })
                            resolve(userData = {
                                errCode: 0,
                                errMessage: 'Update password successfully!'
                            })
                        }else{
                            resolve(userData = {
                                errCode: 3,
                                errMessage: 'Retype new password is not same as new password!'
                            })
                        }
                    }else{
                        resolve(userData = {
                            errCode: 2,
                            errMessage: 'Wrong password!'
                        })
                    }
                }
            }
            resolve(userData = {
                errCode: 1,
                errMessage: 'User not found!'
            })
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

module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    handleUserSignup: handleUserSignup,
    updateUserInfo: updateUserInfo,
    updateUserAvatar: updateUserAvatar,
    handleUpdateUserPassword: handleUpdateUserPassword,
}