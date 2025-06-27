const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3001", // <-- set this to your frontend port
    credentials: true,
  })
);
app.use(express.json());

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
