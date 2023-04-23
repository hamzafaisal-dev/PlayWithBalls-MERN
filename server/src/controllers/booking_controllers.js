import models from '../models/allModels.js'
const { City, Area, Ground, Booking } = models;
import mongoose from 'mongoose';

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings
export async function createBooking(req, res, next) {
    try {

        // retrieve user ID from authenticated user session
        const userID = new mongoose.Types.ObjectId(req.user.user._id);

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        // store user selected slots in an array and total the amount
        const selectedSlots = [];
        let totalAmount = 0;

        // get current date
        const date = new Date();

        // push selected slots to booking
        for (let slot of ground.slots) {
            if (slot.status === 'selected') {
                totalAmount += slot.rate;
                selectedSlots.push(slot);

                // update status of selected slots to pending. Slots cannot be selected by anyone now
                slot.status = 'pending';
                await ground.save();
            }
        }

        // if no slots are selected, throw error
        if (selectedSlots.length === 0) {
            return res.status(400).json({ message: 'Select a slot to book' });
        }

        // create new booking
        const newBooking = await Booking.create({
            "bookingStatus": "pending",
            "bookingDate": date,
            "user": userID,
            "ground": req.params.groundID,
            "slots": selectedSlots,
            "totalAmount": totalAmount
        });

        res.status(200).json({ newBooking });

    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError' && error.message.includes('bookingStatus')) {
            return res.status(400).json({ message: 'Invalid status' })
        }

        if (error.name === 'ValidationError' && error.message.includes('bookingDate')) {
            return res.status(400).json({ message: 'Invalid booking date' });
        }

        if (error.name === 'ValidationError' && error.message.includes('slots')) {
            return res.status(400).json({ message: 'Invalid slots' });
        }

        if (error.name === 'ValidationError' && error.message.includes('totalAmount')) {
            return res.status(400).json({ message: 'Invalid total amount' });
        }

        res.status(500).json({ message: "Something went wrong" });
    }
}

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings/:bookingID
export async function getBooking(req, res, next) {
    try {

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        const bookingID = req.params.bookingID;

        // check if booking ID request parameter is valid
        const booking = await Booking.findById(bookingID);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ booking });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings
export async function getAllBookings(req, res, next) {
    try {

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        const bookingID = req.params.bookingID;

        // check if ground ID request parameter is valid
        const bookings = await Booking.find({});

        if (bookings.length == 0) {
            return res.status(404).json({ message: "Booking history is empty for this ground" });
        }

        res.status(200).json({ bookings });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings/:bookingID
export async function deleteBooking(req, res, next) {
    try {

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        const bookingID = req.params.bookingID;

        // check if ground ID request parameter is valid
        const deletedBooking = await Booking.findByIdAndDelete(bookingID);

        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ message: 'Booking deleted successfully', deletedBooking });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings/:bookingID
export async function approveBooking(req, res, next) {
    try {

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        const bookingID = req.params.bookingID;
        q
        // check if booking ID request parameter is valid
        const booking = await Booking.findByIdAndUpdate(bookingID, { "status": "confirmed" });

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ booking });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

// /cities/:cityID/areas/:areaID/grounds/:groundID/bookings/:bookingID
export async function rejectBooking(req, res, next) {
    try {

        const cityID = req.params.cityID;

        // check if city ID request parameter is valid
        const city = await City.findById(cityID);

        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        const areaID = req.params.areaID;

        // check if area ID request parameter is valid
        const area = await Area.findById(areaID);

        if (!area) {
            return res.status(404).json({ message: "Area not found" });
        }

        const groundID = req.params.groundID;

        // check if ground ID request parameter is valid
        const ground = await Ground.findById(groundID);

        if (!ground) {
            return res.status(404).json({ message: "Ground not found" });
        }

        const bookingID = req.params.bookingID;

        // check if booking ID request parameter is valid
        const booking = await Booking.findByIdAndUpdate(bookingID, { "status": "rejected" });

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ booking });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}