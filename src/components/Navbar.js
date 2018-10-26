import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="index.html"><h1>EasyBike</h1></a>
        <div className="mx-auto">
          <button type="button" className="nav-item btn vite-button">Vite !<br />Un vélo</button>
          <button type="button" className="nav-item btn vite-button">Vite !<br />Une place</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
