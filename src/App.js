import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Navbar from './UI/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
