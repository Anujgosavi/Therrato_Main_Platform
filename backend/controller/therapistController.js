const Therapist = require("../models/therapistModel");

// Create therapist profile
exports.createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);
    res.status(201).json({
      status: "success",
      data: { therapist },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Get all therapists
exports.getAllTherapists = async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.status(200).json({
      status: "success",
      results: therapists.length,
      data: { therapists },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Get single therapist by ID
exports.getTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ status: "fail", message: "Not found" });
    }
    res.status(200).json({ status: "success", data: { therapist } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};
