const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const students = ["Bryan", "Nathan", "Li", "Brock"];

app.use(bodyParser.json());
app.use(cors());

app.get("/api/students", (request, response) => {
  return response.status(200).json(students);
});

app.get("/api/students/:name", (req, res) => {
  if (students.includes(req.params.name)) {
    return res.status(200).json("Student Found");
  } else {
    return res.status(500).json("Student Not Found");
  }
});

app.listen(3001, () => console.log("Listening at port 3001"));
