import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="search/:searchTerm" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
