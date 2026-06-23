# 📚 Student CRUD API (Node.js + MongoDB)

A simple backend project built using **Node.js, Express, MongoDB Atlas, and Mongoose** to perform CRUD operations on student data.

---

## 🚀 Features

- ➕ Create student
- 📄 Read all students
- ✏️ Update student by ID
- ❌ Delete student by ID
- 🧪 Add sample student
- ☁️ MongoDB Atlas database integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS

---

## 📁 Project Structure

project-folder/
│
├── server.js
├── package.json
├── README.md
└── models/
    └── Student.js

---

## ⚙️ Installation

### Install dependencies
npm install express mongoose cors

---

### Run project
node server.js

---

## 🌐 API Endpoints

### 🏠 Home
GET /

---

### ➕ Create Student
POST /students

Body:
{
  "name": "Athul",
  "email": "athul@mail.com",
  "age": 21
}

---

### 📄 Get All Students
GET /students

---

### 🧪 Add Sample Data
GET /addsample

---

### ✏️ Update Student
PUT /students/:id

---

### ❌ Delete Student
DELETE /students/:id

---

## 🗄️ Database

MongoDB Atlas cloud database used.

Connection string is inside server.js.

---

## ▶️ Run Project

node server.js

Server runs at:
http://localhost:3000

---

## 👨‍💻 Author

Student CRUD API Project

---

## 📌 Notes

- Install dependencies before running
- Use Postman / Hoppscotch for testing
- Run /addsample first to check data
