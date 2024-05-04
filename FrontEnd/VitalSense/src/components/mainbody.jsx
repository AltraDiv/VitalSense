import React from 'react';
import { useState } from 'react';
import './mainbody.css';
import CallButton from './CallButton';

function Mainbody() {
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
                    Age:
                    <input type="text" name="age" placeholder="Enter age" className="input-field"/>
                </label>
            </form>
            <CallButton/>
        </div>
    );
}



export default Mainbody;