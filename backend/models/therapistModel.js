const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({
  supabaseId: { type: String, required: true, unique: true }, // Supabase user id
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["therapist", "admin", "patient"],
    default: "therapist",
  },
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
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
