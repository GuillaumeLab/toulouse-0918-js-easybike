import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import Map from './Map';
import './Map.css';
import SideMenu from './SideMenu';
import './SideMenu.css';

class App extends Component {
  render() {
    return (
      <div className='App container-fluid'>
        <Navbar/>   
        <div className="row">
          <SideMenu/> 
          <Map/>
        </div>           
      </div>
    );
  }
}

export default App;
