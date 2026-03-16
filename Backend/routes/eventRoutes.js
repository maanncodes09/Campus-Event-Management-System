const express = require("express");
const router = express.Router();
const Event = require("../models/event");

// Create Event
router.post("/create-event", async (req, res) => {

  const { title, description, date, venue } = req.body;

  const newEvent = new Event({
    title,
    description,
    date,
    venue
  });

  await newEvent.save();

  res.json({ message: "Event created" });

});

// Get all events
router.get("/events", async (req, res) => {

  const events = await Event.find();
  res.json(events);

});

module.exports = router;