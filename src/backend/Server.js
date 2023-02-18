const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongo link here');
}

const theoryTest = new mongoose.Schema({
  //Schema here
});

const theoryT = mongoose.model('mechanicsjournals', theoryTest);