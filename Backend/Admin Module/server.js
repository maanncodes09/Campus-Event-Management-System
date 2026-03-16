const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Campus Event Management Running");
});

app.get("/admin/dashboard", (req, res) => {
  res.json({
    total_users: 5,
    total_Events: 2,
    total_Registrations: 2
  });
});

app.get("/admin/events", (req, res) => {
  const events = [
    {
      title: "Hackathon 2026",
      date: "25 March",
      location: "Auditorium"
    },
    {
      title: "Coding Contest",
      date: "25 March",
      location: "Lab 3"
    },
    
  ];

  res.json(events);
});


app.get("/admin/registrations", (req, res) => {
  const registrations = [
    {
      user: "Ujjwal",
      event: "Hackathon 2026"
    },
    {
      user: "Prakhar",
      event: "Coding Contest"
    }
  ];

  res.json(registrations);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});