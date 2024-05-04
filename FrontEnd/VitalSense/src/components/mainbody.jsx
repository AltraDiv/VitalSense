import React, { useState } from 'react';
import './mainbody.css';
import CallButton from './CallButton';

function Mainbody() {
  const [car, setCar] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="main-container">
      <form>
        <h1 className="title">Client Information</h1>
        <label className="form-label">
          Name:
          <input type="text" name="name" placeholder="Enter name" className="input-field" value={name} onChange={(event) => {
    setName(event.target.value)}} />
        </label>
        <label className="form-label">
          Age:
          <input type="text" name="age" placeholder="Enter age" className="input-field" value={age} onChange={(event) => {
    setAge(event.target.value)}}/>
        </label>
        <label className="form-label">
          Phone number (optional):
          <input type="text" name="phone-number" placeholder="Enter phone number" className="input-field" value={phone} onChange={(event) => {
            setPhone(event.target.value)
          }}/>
        </label>
      </form>
      
      <CallButton name={name} age={age} phone={phone}/>
    </div>
  );
}

export default Mainbody;