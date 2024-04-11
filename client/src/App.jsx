import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <main>
      <NavBar />
      <div className="page-container">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
