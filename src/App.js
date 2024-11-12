import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Message from './components/Message';

function App() {
  return (
    
    <Router>
      <div className="bg-gradient">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/messages" element={<Message />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
