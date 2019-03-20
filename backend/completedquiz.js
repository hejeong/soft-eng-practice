const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const CompletedQuizSchema = new Schema(
  {
    id: Number,
    quizId: Number,
    score: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("CompletedQuiz", CompletedQuizSchema, "completedquizzes");