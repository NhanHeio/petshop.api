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
                    if(check){
                        userData.errCode = 0;
                        userData.message = 'Ok!';
                        delete user.password;
                        userData.user = user;

                    }else{
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

module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
}