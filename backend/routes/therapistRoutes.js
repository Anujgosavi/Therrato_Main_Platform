const express = require("express");
const therapistController = require("../controller/therapistController");

const router = express.Router();

router.route("/createTherapist").post(therapistController.createTherapist);

router.route("/getAllTherapists").get(therapistController.getAllTherapists);

router.route("/:id").get(therapistController.getTherapist);

module.exports = router;
