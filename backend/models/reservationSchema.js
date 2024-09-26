import mongoose from "mongoose";
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],    
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must contain at least 3 characters!"],
        maxLength: [30, "last name cannot exceed 30 characters!"],    
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "provide valid email!"],
    },
    phone: {
        type: String, // Make phone a string to validate its length
        required: true,
        validate: {
          validator: function (v) {
            return v.length === 10;
          },
          message: "Phone number must contain exactly 10 digits!"
        }
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },


})

export const Reservation = mongoose.model("Reservation", reservationSchema)