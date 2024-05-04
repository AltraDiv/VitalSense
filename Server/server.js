require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const app = express();
const PORT = 8111;

app.use(bodyParser.json());
app.use(cors());

app.post('/post-data', (req, res) => {
  const name = req.body.name;
  const phoneto = req.body.phoneto;
  const problem = req.body.problem;
  const accountSid = process.env.VITE_SID;
  const authToken = process.env.VITE_TOKEN;
  
  const client = require('twilio')(accountSid, authToken);

  // const twiml = new VoiceResponse();
  // twiml.say('Hello from your pals at Twilio! Have fun.');

  client.calls
      .create({
         url: `http://demo.twilio.com/docs/voice.xml`,
         to: `${phoneto}`,
         from: '+13656580913'
       })
      .then(call => console.log(call.sid));

  // client.messages
  //     .create({
  //        body: `Warning! This text is by VitalSense, ${name} has suffered a ${problem}! Emergency Responders have been notified`,
  //        from: '+13656580913',
  //        to: `${phoneto}`
  //      })
  //     .then(message => console.log(message.sid));

  res.status(200).json({ message: 'success' });
});


// Route to handle POST requests to /post-data
app.get('/get-data', (req, res) => {
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
