const express = require("express");
const patientController = require("../controller/patientController");

const router = express.Router();

router.route("/createPatient").post(patientController.createPatient);

router.route("/getAllPatients").get(patientController.getAllPatients);

router.route("/:id").get(patientController.getPatient);

module.exports = router;
