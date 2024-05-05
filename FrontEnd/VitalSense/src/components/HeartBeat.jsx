import React from "react";
import { useState } from "react";

function HeartBeat() {
  const [button, setButton] = useState(0);
  const [heartBeat, setHeartBeat] = useState("");

  if (button === 0) {
  return (
    <div className="main-container">
      <form>
        <label className="form-text">
        <h1 className="title">Automatic Heart Beat</h1>
        <p>Automatic Heart Beat</p>
        </label>
      </form>
      <button className="button" onClick={() => {setButton(1)}}>Change to Manual</button>
    </div>
  )} else {
    return (
      <div className="main-container">
        <form>
          <label className="form-label">
          <h1 className="title">Manual Heart Beat</h1>
            <input
              type="text"
              name="heartbeat"
              placeholder="Enter heart beat"
              className="input-field"
            />
          </label>
        </form>
        <div className="heart-button">
        <button className="change-button" onClick={() => {setButton(0)}}>Change to Automatic</button>
<<<<<<< HEAD
=======
        <button className="submit-button" onClick={(event) => {setHeartBeat(event.target.value)}}>Submit</button>
>>>>>>> b73709fd35a683bc9527a0005d24693b27544519
        </div>
      </div>
    )};
}

export default HeartBeat;