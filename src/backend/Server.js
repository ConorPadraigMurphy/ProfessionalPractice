const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 4000;

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
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.z0qnvor.mongodb.net/?retryWrites=true&w=majority');
}

const theoryTestSchema = new mongoose.Schema({
  //Schema here
  question: String,
  answer1: [{ answer: String, correct: Boolean }],
  answer2: [{ answer: String, correct: Boolean }],
  answer3: [{ answer: String, correct: Boolean }],
  answer4: [{ answer: String, correct: Boolean }]
});

const questionsModel = mongoose.model('allQuestions', theoryTestSchema);

//Post request to get question, and answers
app.post('/api/questions', (req, res) => {
  console.log(req.body);
  theoryTestSchema.create({
    question: req.body.question,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4

  })
  res.send('Question Received');
})

//Gets all json data from /api/questions
app.get('/api/questions', (req, res) => {
  questionsModel.find((error, data) => {
    res.json(data);
  })
})

app.listen(port, () => {
  console.log(`Theory Test app listening on port ${port}`)
})