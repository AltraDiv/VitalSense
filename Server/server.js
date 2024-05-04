const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8111;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

// Route to handle POST requests to /post-data
app.get('/get-data', (req, res) => {
//   const requestData = req.body; // Assuming JSON data is sent in the request body
  console.log('Hey we got the request to make the twilio tingy');

  // implement twilio here

  // check if success
  
  // Assuming you want to send back a response
  res.status(200).json({ message: 'success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
