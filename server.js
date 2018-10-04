const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const SERVER_PORT = 2222;

const unicornsApi = require('./apis/uniconsApi');
const app = express();

mongoose.connect('mongodb://localhost/unicornsDB', function () {
  console.log("DB connection established!!!");
})

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/unicorns" , unicornsApi);

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});