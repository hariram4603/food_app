import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

 try {
    console.log("Data received for reservation:", req.body); // Log incoming data

    const newReservation = await Reservation.create(req.body); // Create the reservation
    console.log("Reservation created successfully:", newReservation); // Log the created reservation

    res.status(200).json({
        success: true,
        message: "Reservation Sent Successfully!",
    });
} catch (error) {
    console.error("Error while creating reservation:", error); // Log the full error for debugging
    if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
}
};





