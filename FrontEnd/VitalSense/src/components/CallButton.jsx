import React from "react";

const CallButton = ({ name, age }) => {
  const sendData = () => {
    // Make a POST request to the server
    fetch('http://localhost:8111/post-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Bob',
        age: age,
        phoneto: '16478619071',
        problem: 'HeartAttack'
      })    
    })
    .then(response => {
      if (!response.ok) {
        console.log(name, age)
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

  return (
    <div>
      <button className="button" onClick={sendData}>Call</button>
    </div>
  );
}

export default CallButton;