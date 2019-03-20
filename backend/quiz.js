const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const QuizSchema = new Schema(
  {
    id: Number,
    password: String,
    name: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Quiz", QuizSchema, "quizzes");