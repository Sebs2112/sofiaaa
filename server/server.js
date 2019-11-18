const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const dotenv = require('dotenv');

dotenv.config();

var user = require('./routes/user'); // Imports routes for the user
var category = require('./routes/category'); // Imports routes for the category
var skill = require('./routes/skill'); // Imports routes for the skill


var bodyParser = require('body-parser')
// Make it so the Json bodies can be parsed
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB,() => console.log("connected to mongodb"));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/user', user);
app.use('/skill', skill);
app.use('/category', category);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

