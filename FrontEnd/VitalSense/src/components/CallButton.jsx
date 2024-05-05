import React from "react";
let point_val;
const CallButton = ({ name, age, phone, gender, location}) => {
  const sendData = () => {

    fetch(`http://localhost:8111/gem-data?age=${age}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      point_val = data.point.text;
      console.log('Server response:', data); // Logging the data received from the server
      // Handle the response from the server as needed

      console.log(point_val);
      if(parseInt(data.point.text) >= 7){
      console.log("Call 911");
  
      fetch('http://localhost:8111/post-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          age: age,
          gender: gender,
          location: location,
          phoneto: phone,
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
    }




    
    })
    .catch(error => {
      console.error('Error fetching data from server:', error);
      // Handle any errors that occurred during the request
    });
   
  //}
  ;}
    return (
    <div>
      <button className="button" onClick={sendData}>Call</button>
    </div>
  );
}

export default CallButton;