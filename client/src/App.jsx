import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import background from './assets/video/background.mp4';

const App = () => {
  return (
    <main>
      <NavBar />
      <video className="background-video" autoPlay loop muted>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.    
      </video>
      <div className="page-container">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
