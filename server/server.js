const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config();


app.listen(port, () => console.log(`Listening on port ${port}`));
console.log("Hi")
console.log(process.env.MONGODB)

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

