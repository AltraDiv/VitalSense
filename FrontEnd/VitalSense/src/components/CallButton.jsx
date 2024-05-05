import React from "react";
import { useState } from "react";

<<<<<<< HEAD
const CallButton = ({ name, setName, gender, setGender, age, setAge, location, setLocation, phone, setPhone }) => {
=======
const CallButton = ({ name, age, gender, location, phone }) => {
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519
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
<<<<<<< HEAD
=======
        location: location,
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519
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

  return (
    <div>
      <p style={{color: "black"}}>{error}</p>
<<<<<<< HEAD

      <button onClick={() => { sendData() }} className="button">Call</button>
=======
      <button onClick={() => {
        
        if (name && age && phone) {
          setError(null);
          sendData();
        } else {
          setError("Please fill out all text boxes!");
        }
      }} className="button">Call</button>
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519
    </div>
  );
}

export default CallButton;