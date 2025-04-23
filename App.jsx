import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:email/:session" element={<Profile />} />
  </Routes>
);

export default App;
