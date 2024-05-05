import React, { useState } from "react";
import Bpm from "./Bpm";

function HeartBeat() {
  const [button, setButton] = useState(0);
  const [heartBeat, setHeartBeat] = useState("");
  const [manualBpm, setManualBpm] = useState(null);

  const handleManualSubmit = (event) => {
    event.preventDefault();
    const value = parseInt(heartBeat, 10);
    if (!isNaN(value) && value > 0) {
      setManualBpm(value);
    } else {
      setManualBpm(0);
    }
  };

  if (button === 0) {
    return (
      <div className="main-container">
        <form>
          <label className="form-text">
            <h1 className="title">Automatic Heart Beat</h1>
            <Bpm manualBpm={manualBpm} />
          </label>
        </form>
        <button className="button" onClick={() => { setButton(1); }}>Change to Manual</button>
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <form onSubmit={handleManualSubmit}>
          <label className="form-label">
            <h1 className="title">Manual Heart Beat</h1>
            <input
              type="text"
              name="heartbeat"
              placeholder="Enter heart beat"
              className="input-field"
              value={heartBeat}
              onChange={(e) => setHeartBeat(e.target.value)}
            />
          </label>
          <div className="heart-button">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
        <div className="heart-button">
          <button className="change-button" onClick={() => { setButton(0); }}>Change to Automatic</button>
        </div>
      </div>
    );
  }
}

export default HeartBeat;
