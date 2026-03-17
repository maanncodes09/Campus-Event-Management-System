const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/generate-qr", async (req, res) => {
    const data = "Student Registered for Hackathon";
    const qr = await QRCode.toDataURL(data);
    res.json({ qr });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});