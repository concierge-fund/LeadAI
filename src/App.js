import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiderAI from './LiderAI';
import Privacy from './Privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LiderAI />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
