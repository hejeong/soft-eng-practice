const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const User = require("./user");
const Quiz = require("./quiz");
const Forum = require("./forum");
const CompletedQuiz = require("./completedquiz")

const API_PORT = 3001;
const app = express();
const router = express.Router();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.json());
const dbRoute = "mongodb+srv://minerva:minerva@minerva-c20xu.mongodb.net/minerva";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/searchForum", (req, res) => {
  console.log(req.query.title)
  Forum.find({
    'title': req.query.title
  },
    (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our get method
// this method fetches all available data in our database
router.get("/getUsers", (req, res) => {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getQuizzes", (req, res) => {
  Quiz.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getForums", (req, res) => {
  Forum.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getCompletedQuizzes", (req, res) => {
  CompletedQuiz.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/submitQuiz", (req, res) => {
  let quiz = new CompletedQuiz();
  
  const { id, quizId, score } = req.body;
  console.log({id, quizId, score})
  if ((!id && id !== 0) || !quizId || (!score && score !== 0)) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  quiz.id = id;  
  quiz.quizId = quizId;
  quiz.score = score;
  quiz.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));