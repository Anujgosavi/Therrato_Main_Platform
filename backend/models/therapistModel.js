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
