const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  photo: { type: String, default: "default.jpg" },
  role: {
    type: String,
    enum: ["therapist", "patient", "admin"],
    default: "patient",
  },
  passwordChangedAt: Date,
  ratings: { type: Number, default: 0 },
  title: { type: String, default: "Dr." },
  bio: { type: String },
  education: { type: String },
  experience: { type: String },
  approach: { type: String },
  price: { type: Number, required: [true, "Session price required"] },
  selectedSpecializations: [{ type: String }],
  availability: [{ type: String }], // e.g. ["mon", "tue"]
  availabilityTimes: { type: Object }, // { mon: ["8:00 AM", ...], ... }
  languages: [{ type: String }],
  licenseNumber: { type: String },
  certifications: { type: String },
});

const Therapist = mongoose.model("Therapist", therapistSchema);
module.exports = Therapist;
