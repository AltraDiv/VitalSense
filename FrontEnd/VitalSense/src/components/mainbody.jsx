import React, { useState } from 'react';
import './mainbody.css';
import CallButton from './CallButton';

function Mainbody() {
  const [car, setCar] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="main-container">
      <form>
        <h1 className="title">Client Information</h1>
        <label className="form-label">
          Name:
          <input type="text" name="name" placeholder="Enter name" className="input-field" onChange={(event) => {
    setName(event.target.value)}} />
        </label>
        <label className="form-label">
          Age:
          <input type="text" name="age" placeholder="Enter age" className="input-field" onChange={(event) => {
    setAge(event.target.value)}}/>
        </label>
        <label className="form-label">
          Phone number:
          <input type="text" name="phone-number" placeholder="Enter phone number" className="input-field" onChange={(event) => {
            setPhone(event.target.value)
          }}/>
        </label>
      </form>
      <CallButton name={name} car={car} age={age}/>
    </div>
  );
}

export default Mainbody;