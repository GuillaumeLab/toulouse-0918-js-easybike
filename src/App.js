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
  constructor(props) {
    super(props);
    this.state = {
      stationsToDisplay: 'all'
    };
    this.displayWhat = this.displayWhat.bind(this);
  }

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

  displayWhat(stations) {
    this.setState({
      stationsToDisplay: stations
    });
  }

  render() {
    const { stationsToDisplay } = this.state;
    return (
      <div className="App container-fluid">
        <Navbar
          displayWhat={this.displayWhat}
        />
        <div className="row">
          <SideMenu displayWhat={this.displayWhat} />
          <MapContainer stationsToDisplay={stationsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
