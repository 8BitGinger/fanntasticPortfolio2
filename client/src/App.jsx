import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import background from './assets/video/infographic.mp4';

const App = () => {
  return (
    <main>
      <NavBar />
      <video className="background-video" autoPlay playsInline loop muted>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        <Outlet />
    
    </main>
  );
};

export default App;
