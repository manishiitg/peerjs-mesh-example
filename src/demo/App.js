import './App.css';
import PeerClient from "./PeerClient"
import React from 'react';
import { Call } from "@manishiitg/webrtc-call"

function App() {
  return (
    <div className="App">
      <Call />
    </div>
  );
}

export default App;
