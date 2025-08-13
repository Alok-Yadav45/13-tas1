import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-1">Layout 1</span>
        <a href='https://www.ferrari.com/en-IN' className="navbar-a">About</a>
        <a href='https://www.bmw.com/en/index.html' className="navbar-a">Services</a>
        <a href='http://mercedes-benz.co.in/' className="navbar-a">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;