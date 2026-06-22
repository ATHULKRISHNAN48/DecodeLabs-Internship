const express = require("express");
const app = express();

app.use(express.json());

// Sample data (in-memory database)
let students = [
  { id: 1, name: "John", email: "john@mail.com", age: 20 },
  { id: 2, name: "Sara", email: "sara@mail.com", age: 22 },
];

// ✅ GET all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// ✅ GET student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// ✅ POST - Add student
app.post("/students", (req, res) => {
  const { name, email, age } = req.body;

  // validation
  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email required" });
  }

  if (age <= 0) {
    return res.status(400).json({ message: "Age must be positive" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    age,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

// ✅ PUT - Update student
app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (age <= 0) {
    return res.status(400).json({ message: "Age must be positive" });
  }

  student.name = name;
  student.email = email;
  student.age = age;

  res.status(200).json(student);
});

// ✅ DELETE student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.status(200).json({ message: "Student deleted successfully" });
});

// 🚀 Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
