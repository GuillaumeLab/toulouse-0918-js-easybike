import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MapContainer from './components/MapContainer';


import './App.css';
import './Navbar.css';
import './Map.css';
import './SideMenu.css';
import './PopupContent.css';

class App extends Component {
  getStyle(feature) {
    return {
      fillColor: '#ece7f2',
      weight: 2,
      opacity: 1,
      color: 'blue',
      dashArray: '3',
      fillOpacity: 0.7
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <div className="row">
          <SideMenu />
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
