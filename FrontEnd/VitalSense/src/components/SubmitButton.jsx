import React from "react";
import { useState } from "react";

const SubmitButton = ({ name, setName, gender, setGender, age, setAge, location, setLocation, phone, setPhone }) => {
  const [error, setError] = useState(null);

  return (
    <div>
      <p style={{color: "black"}}>{error}</p>

      <button onClick={() => {
        
        if (name && gender && age && location && phone) {
          setError(null);
          setName('');
          setGender('')
          setAge('');
          setLocation('');
          setPhone('');
        } else {
          setError("Please fill out all text boxes!");
        }
      }} className="button">Submit</button>
    </div>
  );
}

export default SubmitButton;