import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './views/Game';
import Login from './views/Login';
import Registration from './views/Registration';
const axios = require('axios');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
