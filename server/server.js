const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config();

var user = require('./routes/user'); // Imports routes for the user
app.use('/user', user);

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB,() => console.log("connected to mongodb"));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

