const { Schema, model } = require("mongoose");

const CourseSchema = Schema(
  {
    courseCode: {
      type: String,
      match: [
        /^[a-zA-Z][a-zA-Z]-[a-zA-Z][a-zA-Z]-\d\d$/,
        'Invalid code format, expecting "xx-xx-00", x for a letter, 0 for a number',
      ],
      required: [true, "Course code is required"],
      uppercase: true,
      unique: [true, "This code is already taken."],
    },
    name: {
      type: String,
      required: [true, "Course name is required"],
    },
    description: {
      type: String,
      default: "Course description",
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student", // same with student model
      },
    ],
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
  },
  { timestamps: true }
);
const Course = model("Course", CourseSchema);
module.exports = Course;
