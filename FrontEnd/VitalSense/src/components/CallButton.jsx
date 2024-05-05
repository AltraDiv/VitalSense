import React from "react";
import { useState } from "react";


const CallButton = () => {

  const sendData = () => {
    // Make a POST request to the server
    fetch('http://localhost:8111/post-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
        gender: gender,
        phone: phone,
        phoneto: '16478619071',
        problem: 'HeartAttack'
      })    
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
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

  const [error, setError] = useState(null);

  return (
    <div>
      <p style={{color: "black"}}>{error}</p>
      <button onClick={() => {
        
        if (name && age && phone) {
          setError(null);
          sendData();
        } else {
          setError("Please fill out all text boxes!");
        }
      }} className="button onClick={sendData}">Call</button>
    </div>
  );
}

export default CallButton;
