const express = require("express");
const app = express();

app.use(express.json());

const therapistRoutes = require("./routes/therapistRoutes");
app.use("/api/v1/therapists", therapistRoutes);

app.get("/api/v1/therreto", (req, res) => {
  res.send("Hello, Node.js!");
});

module.exports = app;
