import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;