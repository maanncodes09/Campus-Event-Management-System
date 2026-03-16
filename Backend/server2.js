const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// import routes
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/eventsDB")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB Error:", err);
});

// test route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

// event routes
app.use("/", eventRoutes);

// start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});