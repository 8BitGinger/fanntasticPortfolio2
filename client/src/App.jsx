import React from 'react';
import { Outlet } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <main>
    
      {/* <video className="background-video" autoPlay playsInline loop muted>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="page-container">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
