import { useState } from 'react'
import Header from "./components/Header.jsx";
import Mainbody from "./components/mainbody.jsx"
import CallButton from "./components/CallButton.jsx"
import HeartBeat from './components/HeartBeat.jsx';
import Bpm from './components/Bpm.jsx';

import './App.css'

function App() {
  return (
      <div className="app-container">
        <div className="header">
          <Header/>
        </div>
        <div className="content-container">
          <div className="main-content">
            <Mainbody/>
          </div>
          <div className="heart-beat">
            <HeartBeat/>
            <Bpm/>
          </div>
        </div>
      </div>
  );
}

export default App