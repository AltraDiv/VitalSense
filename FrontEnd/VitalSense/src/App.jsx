import { useState } from 'react'
import Header from "./components/Header.jsx";
import Mainbody from "./components/mainbody.jsx"
import CallButton from "./components/CallButton.jsx"
import HeartBeat from './components/HeartBeat.jsx';
import './App.css'
import Bpm from './components/Bpm.jsx';

function App() {

  return (
    <>
    <div className="app-container">
      <div className="header">
        <Header/>
      </div>
    <div className="main-content">
      <Mainbody/>
    </div>
  </div>
  <div className="app-container">
    <HeartBeat/>
    <Bpm/>
  </div>
  </>
  );
}

export default App
