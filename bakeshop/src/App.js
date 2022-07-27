import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CakeContainer from './components/CakeContainer';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route exact path="/" element={<CakeContainer/>} />
        </Routes>
      </div>
    </Router>
  
  );
}

