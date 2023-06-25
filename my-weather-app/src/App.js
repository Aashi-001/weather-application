import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherApp from './weatherApp';
import Login from './Login';
import Detailed from './detailed';
import Signup from './signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WeatherApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
    

export default App;
