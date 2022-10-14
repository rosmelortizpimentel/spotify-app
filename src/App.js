import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Dashboard } from './components/dashboard/Dashboard';
import { AudioTrackProvider } from './components/contexts/AudioTrack/AudioTrackProvider';
import { theme } from './themes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AudioTrackProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="search/:searchTerm" element={<Dashboard />} />
          </Routes>
        </AudioTrackProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
