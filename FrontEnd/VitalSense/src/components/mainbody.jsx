import React, { useState } from 'react';
import './mainbody.css';
import CallButton from './CallButton';

function Mainbody() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="main-container">
      <form>
        <label className="form-label">
          Heart Rate:
          <input type="text" name="heartRate" placeholder="Enter heart rate" className="input-field" />
        </label>
        <label className="form-label">
          Car:
          <input type="text" name="car" placeholder="Enter car model" className="input-field" />
        </label>
        <label className="form-label">
          Name:
          <input type="text" name="name" placeholder="Enter name" className="input-field" onChange={handleNameChange} />
        </label>
        <label className="form-label">
          Age:
          <input type="text" name="age" placeholder="Enter age" className="input-field" onChange={handleAgeChange}/>
        </label>
      </form>
      <CallButton name={name} age={age}/>
    </div>
  );
}

export default Mainbody;