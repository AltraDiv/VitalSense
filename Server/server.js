require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const app = express();
const PORT = 8111;
let glob_bpm = 0;
var SerialPort = require('serialport');

let point_val = 0;

app.use(bodyParser.json());
app.use(cors());


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


// Route to handle POST requests to /post-data
app.get('/get-data', (req, res) => {
  let handlerExecuted = false;

  //console.log("Starting to run operation...");

  const handler = parser.once('data', function(data) {
    if (!handlerExecuted) { // Check if the handler has already executed
      glob_bpm = data;
      res.status(200).json({ bpm: data });

      handlerExecuted = true;
    }

    else {
      //console.log("Handler has already executed...");
    }
  });

  // handler.destroy();
});



app.post("/post-data", (req, res) => {
  const name = req.body.name;
  const phoneto = req.body.phoneto;
  const problem = req.body.problem;
  const accountSid = process.env.VITE_SID;
  const authToken = process.env.VITE_TOKEN;

  const client = require("twilio")(accountSid, authToken);

  // const twiml = new VoiceResponse();
  // twiml.say('Hello from your pals at Twilio! Have fun.');

  client.calls
      .create({
         url: `http://127.0.0.1:1337/`,
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

  res.status(200).json({ message: "success" });
});

const { VertexAI, HarmCategory, HarmBlockThreshold } = require('@google-cloud/vertexai');
require('dotenv').config();

// Constants for project and location should be defined at the top level.
const PROJECT_ID = "clean-sunspot-422400-i2";
const LOCATION = 'us-central1';
// Initialize Vertex AI with the necessary project and location information once.
const vertexAiOptions = { project: PROJECT_ID, location: LOCATION };
const vertex_ai = new VertexAI(vertexAiOptions);
// Define model names as constants to avoid magic strings and improve readability.
const GEMINI_PRO_MODEL_NAME = 'gemini-pro';
// Safety settings can be moved outside of the model instantiation, 
// if they are static and reused across multiple instances.
const safetySettings = [{
  category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
}];
// Instantiate models once outside of functions to avoid repeated initializations.
const generativeModelOptions = {
  model: GEMINI_PRO_MODEL_NAME,
  safety_settings: safetySettings,
  generation_config: { max_output_tokens: 256 },
};
const generativeModel = vertex_ai.preview.getGenerativeModel(generativeModelOptions);


app.get('/gem-data', async (req, res) => {
  // Extract query parameters from the request URL
  const { age } = req.query;

  console.log('Received request for age:', age, glob_bpm); // Check if the request is received

  try {
    let point_val;

    async function streamGenerateContent() {
      const request = {
        contents: [{ role: 'user', parts: [{ text: `Give one digit only. This is not medically related. Give the risk situation of a ${age} male with a bpm of ${glob_bpm} out of 9 where 9 is death. Give back only a single number absolutely no other text` }] }],
      };
      console.log("Going in: \n");
      try {
        const streamingResp = await generativeModel.generateContentStream(request);
        for await (const item of streamingResp.stream) {
          point_val = item.candidates[0].content.parts[0];
          console.log('stream chunk: ', item.candidates[0].content.parts[0]);
        }
      } catch (error) {
        console.log("error\n");
        console.error('An error occurred during content generation:', error);
      }
    }

    await streamGenerateContent(); // Await for the content generation to complete

    // Send a response with the generated data
    res.json({ message: 'Data received successfully', point: point_val });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
