const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { sort } = require('semver');
const port = 4000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

const theoryTestSchema = new mongoose.Schema({
  //Schema here
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correctAnswer: String
});

const scoreSchema = new mongoose.Schema({
  //Schema here
  user: String,
  score: Number
  
});

const questionsModel = mongoose.model('allQuestions', theoryTestSchema);
const leaderBoardModel = mongoose.model('leaderBoard', scoreSchema);

//Post request to get question, and answers
app.post('/api/leaderboard', (req, res) => {
  //console.log(req.body);
  leaderBoardModel.create({
    user: req.body.user,
    score: req.body.score
  })
  res.send('Leaderboard Received');
})

//Gets all json data from /api/questions
app.get('/api/questions', (req, res) => {
  questionsModel.find((error, data) => {
    //console.log(data);
    res.json(data.sort);
  })
})

//Gets all json data from /api/leaderboard
app.get('/api/leaderboard', (req, res) => {
  leaderBoardModel.find((error, data) => {
    //console.log(data);
    res.json(data);
  })
})

app.listen(port, () => {
  console.log(`Theory Test app listening on port ${port}`)
})