import db from "../models/index";

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

let booking = (userID, service, date, time) => {
    return new Promise(async (resolve, reject) => {
        try {
            let booking = await db.Booking.create({
                service: service,
                user_id: userID,
                date: date,
                time: time
            })
            resolve(booking)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getBooking: getBooking,
    booking: booking,
}