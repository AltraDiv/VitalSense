import React, { useState } from 'react';
import './mainbody.css';
import SubmitButton from './SubmitButton';
import CallButton from './CallButton';

function Mainbody() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState ('');
  const [location, setLocation] = useState ('');

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
        
          <div>
          Gender:<input type="radio" name="gender" value="Male" checked={gender === "Male"}
              onChange={(event) => setGender(event.target.value)} /> Male
            <input type="radio" name="gender" value="Female" checked={gender === "Female"}
              onChange={(event) => setGender(event.target.value)} /> Female
          </div>
        </label>
        <label className="form-label">
          Location:
          <input type="text" name="location" placeholder="Enter phone number" className="input-field" value={location} onChange={(event) => {
            setLocation(event.target.value)
          }}/>
        </label>
        <label className="form-label">
          Phone number:
          <input type="text" name="phone-number" placeholder="Enter phone number" className="input-field" value={phone} onChange={(event) => {
            setPhone(event.target.value)
          }}/>
        </label>
      </form>  
      <CallButton name={name} setName={setName} gender={gender} setGender={setGender} age={age} setAge={setAge} location={location} setLocation={setLocation} phone={phone} setPhone={setPhone}/>    
      <SubmitButton name={name} setName={setName} gender={gender} setGender={setGender} age={age} setAge={setAge} location={location} setLocation={setLocation} phone={phone} setPhone={setPhone}/>
    </div>
  );
}

export default Mainbody;