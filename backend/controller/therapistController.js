const Therapist = require("../models/therapistModel");
const APIFeature = require("../utils/apiFeature");

// Create therapist profile
exports.createTherapist = async (req, res) => {
  try {
    const therapist = await Therapist.create(req.body);
    res.status(201).json({
      status: "success",
      data: { therapist },
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

// Get all therapists with filtering, sorting, field limiting, and pagination
exports.getAllTherapists = async (req, res) => {
  try {
    // Build filter object
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields", "name"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // Advanced filtering (gte, gt, lte, lt)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let filter = JSON.parse(queryStr);

    // Combine all filters using $and
    const andFilters = [];

    // Add normal filters
    if (Object.keys(filter).length > 0) {
      andFilters.push(filter);
    }

    // Add name search if present
    if (req.query.name) {
      const regex = new RegExp(req.query.name, "i");
      andFilters.push({
        $or: [{ firstName: regex }, { lastName: regex }],
      });
    }

    // Final query
    let mongoQuery = andFilters.length > 0 ? { $and: andFilters } : {};

    let query = Therapist.find(mongoQuery);

    // Use APIFeature for sort, fields, paginate
    const features = new APIFeature(query, req.query)
      .sort()
      .limitFields()
      .paginate();

    const therapists = await features.query;
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
