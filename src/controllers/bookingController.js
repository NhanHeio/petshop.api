import bookingService from '../services/bookingService'

const handleGetBooking = async (req, res) => {
    let date = req.query.date
    let calendar = await bookingService.getBooking(date)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Get booking successfully',
        calendar
    })
} 

const handleBooking = async (req, res) => {
    let userID = req.query.userID
    let userName = req.query.userName
    let service = req.query.service
    let date = req.query.date
    let time = req.query.time
    let booking = bookingService.booking(userID, userName, service, date, time)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Booking successfully!',
        booking
    })
}

const handleGetBookingUser = async (req, res) => {
    let userID = req.query.userID
    let service = await bookingService.getBookingUser(userID)
    return res.status(200).json({
        errCode: service.errCode,
        errMessage: service.errMessage,
        listService: service ? service.listService : {}
    })
}

const handleCancelBooking = async (req, res) => {
    let userID = req.query.userID
    let id = req.query.id
    let service = await bookingService.cancelBooking(userID,id)
    return res.status(200).json({
        errCode: service.errCode,
        errMessage: service.errMessage,
        listService: service ? service.listService : {}
    })
}

module.exports = {
    handleGetBooking: handleGetBooking,
    handleBooking: handleBooking,
    handleGetBookingUser: handleGetBookingUser,
    handleCancelBooking: handleCancelBooking,
}