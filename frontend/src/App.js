import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './views/Game';
import Login from './views/Login';
import Registration from './views/Registration';
import GamePage from './pages/GamePage';

const axios = require('axios');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
