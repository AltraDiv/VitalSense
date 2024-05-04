require('dotenv').config();
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
  console.log('Hey we got the request to make the twilio tingy: ');

  const accountSid = process.env.VITE_SID;
  const authToken = process.env.VITE_TOKEN;
  
  const client = require('twilio')(accountSid, authToken);

  client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+16478619071',
         from: '+13656580913'
       })
      .then(call => console.log(call.sid));

  res.status(200).json({ message: 'success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
