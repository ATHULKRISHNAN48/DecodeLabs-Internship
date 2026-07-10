 const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://student:student123@cluster0.vebco8j.mongodb.net/studentdb"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Home Route
app.get("/", (req, res) => {
  res.send("Project 3 Database Integration Running");
});

// CREATE Student
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ All Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Sample Student
app.get("/addsample", async (req, res) => {
  try {
    const student = new Student({
      name: "Athul",
      email: "athul@mail.com",
      age: 21,
    });

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE Student
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE Student
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
