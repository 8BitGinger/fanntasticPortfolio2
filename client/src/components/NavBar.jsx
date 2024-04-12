import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
        <Link className="nav-link" to="/">
          <BiHomeAlt />
        </Link>
        <Link className="nav-link" to="/about">
          <BiUser />
        </Link>
        <Link className="nav-link" to="/resume">
          <BsClipboardData />
        </Link>
        <Link className="nav-link" to="/projects">
          <BsBriefcase />
        </Link>
        <Link className="nav-link" to="/contact">
          <BsChatSquareText />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
