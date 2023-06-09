import express from 'express'
const bookingRouter = express.Router();
import { verifyAccessToken } from '../helpers/authHelpers.js'

import { createBooking, getBookings, getAllBookings, deleteBooking, updateBookingStatus } from "../controllers/booking_controllers.js"

// CREATE new booking in a particular ground
bookingRouter.post('/cities/:cityID/grounds/:groundID/bookings', verifyAccessToken, createBooking);

// GET bookings of a particular user
bookingRouter.get('/mybookings', verifyAccessToken, getBookings)

// GET all bookings of a particular ground
bookingRouter.get('/ground/:groundID/bookings', getAllBookings)

bookingRouter.put('/bookings', updateBookingStatus)

// // UPDATE a particular slot of a particular ground
// slotRouter.put('/cities/:cityID/areas/:areaID/grounds/:groundID/slots/:slotID', updateSlot);

// // DELETE a particular booking's details
bookingRouter.delete('/bookings', deleteBooking);

export { bookingRouter }