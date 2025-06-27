const Patient = require("../models/patientModel");

// Create patient profile
exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      status: "success",
      data: { patient },
    });
  } catch (err) {
    // Duplicate email error
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(400).json({
        status: "fail",
        message: "Email already exists. Please use a different email.",
      });
    }
    // Validation errors
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors)
        .map((el) => el.message)
        .join(" ");
      return res.status(400).json({ status: "fail", message: messages });
    }
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      status: "success",
      results: patients.length,
      data: { patients },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Get single patient by ID
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ status: "fail", message: "Not found" });
    }
    res.status(200).json({ status: "success", data: { patient } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};
