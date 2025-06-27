const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  supabaseId: { type: String, required: true, unique: true }, // Supabase user id
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  phone: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  photo: { type: String, default: "default.jpg" },
  bio: { type: String },
  languages: [{ type: String }],
  // Add more fields as needed for your app
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
