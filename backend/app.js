const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*", // add your frontend and backend URLs here
    credentials: true,
  })
);

const therapistRoutes = require("./routes/therapistRoutes");
app.use("/api/v1/therapists", therapistRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);

const patientRoutes = require("./routes/patientRoutes");
app.use("/api/v1/patients", patientRoutes);

app.get("/api/v1/therreto", (req, res) => {
  res.send("Hello, Node.js!");
});

module.exports = app;
