require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const app = express();
const PORT = 8111;
var SerialPort = require('serialport');

app.use(bodyParser.json());
app.use(cors());

app.post('/post-data', (req, res) => {
  const name = req.body.name;
  const phoneto = req.body.phoneto;
  const accountSid = process.env.VITE_SID;
  const authToken = process.env.VITE_TOKEN;
  
  const client = require('twilio')(accountSid, authToken);

  // const twiml = new VoiceResponse();
  // twiml.say('Hello from your pals at Twilio! Have fun.');

  client.calls
      .create({
         message: `${twiml.toString()}`,
         to: `${phoneto}`,
         from: '+13656580913'
       })
      .then(call => console.log(call.sid));

  // client.messages
  //     .create({
  //        body: `Warning! This text is by VitalSense, ${name} has suffered a heartstroke! Emergency Responders have been notified`,
  //        from: '+13656580913',
  //        to: `${phoneto}`
  //      })
  //     .then(message => console.log(message.sid));

  res.status(200).json({ message: 'success' });
});





const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev/cu.usbmodem1101',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);


app.get('/get-data', (req, res) => {
  let handlerExecuted = false;

  //console.log("Starting to run operation...");

  const handler = parser.once('data', function(data) {
    if (!handlerExecuted) { // Check if the handler has already executed
      res.status(200).json({ bpm: data });

      handlerExecuted = true;
    }

    else {
      //console.log("Handler has already executed...");
    }
  });

  // handler.destroy();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
