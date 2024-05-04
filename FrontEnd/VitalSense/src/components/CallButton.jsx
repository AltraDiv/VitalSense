import React, { useEffect, useState } from "react";
// import twilio from 'twilio';

// const accountSid = import.meta.env.VITE_SID;
// const authToken = import.meta.env.VITE_TOKEN;
// const URL = 'https://api.twilio.com/2010-04-01/Accounts/';
// const client = twilio(accountSid, authToken);

// function Call() {
//   client.calls.create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+16478619071',
//     from: '+13656580913'
//   }).then(call => console.log(call.sid));
// }

const CallButton = () => {

  const sendData = () => {
    // Create a JSON object with the data

    // Make a POST request to the server
    fetch('http://localhost:8111/get-data', {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return "success"
    })
    .then(data => {
      console.log('Server response:', data);
      // Handle the response from the server as needed
    })
    .catch(error => {
      console.error('Error sending data to server:', error);
      // Handle any errors that occurred during the request
    });
  };

  return (
    <div>
      <h1>Send Data to Server</h1>
      
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}


export default CallButton;
