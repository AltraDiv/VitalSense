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
        <label className="form-text">
          Heart Rate:
          <div className="form-text-field">
          <p>Heart Rate</p>
          </div>
        </label>
        <label className="form-label">
          Car:
          <input type="text" name="car" placeholder="Enter car model" className="input-field" onChange={(event) => {
    setCar(event.target.value)}}/>
        </label>
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
      </form>
      <CallButton name={name} car={car} age={age}/>
    </div>
  );
}

export default Mainbody;