import React from "react";
import { useState } from "react";

const CallButton = ({ name, setName, age, setAge, phone, setPhone }) => {
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
        phone: phone,
        phoneto: '16478619071',
        problem: 'HeartAttack'
      })    
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
  const [button, setButton] = useState("Call")
  const [timeout, setTimeout] = useState(0);

  return (
    <div>
      <p style={{color: "black"}}>{error}</p>

      <button onClick={() => {
        console.log(timeout)
        
        if (name && age && phone && timeout === 0) {
          setError(null);
          sendData();
          setName('');
          setAge('');
          setPhone('');
          setTimeout(3)
        } else if (0 < timeout) {
          setError(null)
        } else {
          setError("Please fill out all text boxes!");
        }
      }} className="button">{button}</button>
    </div>
  );
}

export default CallButton;