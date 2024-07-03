const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/student.route.js");
const courseRouter = require("./routes/course.route.js");
const teacherRouter = require("./routes/teacher.route.js");
const productRoute = require("./routes/product.route");

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);
app.use("/api/teachers", teacherRouter);

app.get("/", (req, res) => {
  res.send("Hello from Node API Updated");
});

mongoose
  .connect(
    "mongodb+srv://liyansong2abc:WYqIW2V4uL8QROpo@universitydb.dcxea9q.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3005, () => {
      console.log("Server is running on port 3005");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
