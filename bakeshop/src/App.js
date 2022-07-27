import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CakeContainer from './components/CakeContainer';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">

        <div className="navbar">
          <NavBar />
        </div>

        <Routes>
          
          <Route exact path="/cakes" element={<CakeContainer />} />
        </Routes>
      </div>
    </Router>
  
  );
}

