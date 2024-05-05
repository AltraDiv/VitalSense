import React, { useState } from 'react';
import './mainbody.css';
import SubmitButton from './SubmitButton';

function Mainbody() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState ('');
<<<<<<< HEAD
  const [location, setLocation] = useState ('');
=======
  const [location, setLocation] = useState('');
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519

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
<<<<<<< HEAD
        </label>
        <label className="form-label">
          Gender:
          <input type="text" name="gender" placeholder="Please enter your gender" className="input-field" value={gender} onChange={(event) => {
            setGender(event.target.value)
          }}/>
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
      <SubmitButton name={name} setName={setName} gender={gender} setGender={setGender} age={age} setAge={setAge} location={location} setLocation={setLocation} phone={phone} setPhone={setPhone}/>
=======
        </label>
        <label className="form-label">
          Gender:
          <input type="text" name="gender" placeholder="Enter gender" className="input-field" value={gender} onChange={(event) => {
            setGender(event.target.value)
          }}/>
        </label>
        <label className="form-label">
          Location:
          <input type="text" name="location" placeholder="Enter location" className="input-field" value={location} onChange={(event) => {
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
      
      <CallButton name={name} setName={setName} age={age} setAge={setAge} phone={phone} setPhone={setPhone}/>
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519
    </div>
  );
}

export default Mainbody;