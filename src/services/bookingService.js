import db from "../models/index";
import {sendEmail} from './emailService';

let getBooking = (date) => {
    return new Promise(async (resolve, reject) => {
        try {

            let calendar = await db.Booking.findAll({
                where: {
                    date: date
                }
            })
            resolve(calendar)
        } catch (e) {
            reject(e);
        }
    })

}

let booking = (userID, userName, service, date, time) => {
    return new Promise(async (resolve, reject) => {
        try {
            let longDate = new Date(date)
            let isoDate = longDate.toISOString()
            let booking = await db.Booking.create({
                service: service,
                user_id: userID,
                username: userName,
                date: date,
                date_for_compare: isoDate,
                time: time,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            let admin = await db.User.findOne({
                where: { role_id: 1}
            })
            let user = await db.User.findOne({
                where: {id: userID}
            })
            let subject = 'Notifications for client booking'
            //let text = "Khách hàng " + user.name.toString() + " đã đặt lịch sử dụng dịch vụ " + service.toString() + " vào ngày " + time.toString() + " " + date.toString()
            let html = `<p>Khách hàng <b>` + user.name + ` </b>đã đặt lịch sử dụng dịch vụ <b>` + service + `</b> vào ngày <b>`+ time+ ` ` + date+ `</b></p>
                <hr> <a href="http://localhost:3000/dashboard">Chi tiết</a>
            `
            // console.log(text)
            sendEmail(admin.email,subject,html)
        } catch (e) {
            reject(e);
        }
    })
}

let getBookingUser = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let service = {}
            let listService = ''
            let user = await db.User.findOne({
                where: {id: userID}
            })
            if(user){
                listService = await db.Booking.findAll({
                    where: {user_id: userID},
                    order: [['createdAt', 'DESC']]
                })
                // console.log(listService)
                resolve(service = {
                    errCode: 0,
                    errMessage: 'Get list service by user successfully!',
                    listService
                })
            }
            resolve(service = {
                errCode: 1,
                errMessage: 'Could not find user!'
            })
        }catch (e) {
            reject(e);
        }
    })
}

let cancelBooking = (userID,id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let service = {}
            let listService = ''
            let user = await db.User.findOne({
                where: {id: userID}
            })
            if(user){
                await db.Booking.destroy({
                    where: {
                        id: id,
                        user_id: userID
                    }
                })
                listService = await db.Booking.findAll({
                    where: {user_id: userID}
                })
                resolve(service = {
                    errCode: 0,
                    errMessage: 'Get list service by user successfully!',
                    listService
                })
            }
            resolve(service = {
                errCode: 1,
                errMessage: 'Could not find user!'
            })
        }catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getBooking: getBooking,
    booking: booking,
    getBookingUser: getBookingUser,
    cancelBooking: cancelBooking,
}