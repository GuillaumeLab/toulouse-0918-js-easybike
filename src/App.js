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
      stationsToDisplay: 'all',
      panelToDisplay: ''
    };
    this.displayWhat = this.displayWhat.bind(this);
  }

  displayWhat(stations) {
    this.setState({
      stationsToDisplay: stations
    });
  }

  displaySearch() {
    this.setState({
      panelToDisplay: 'search'
    });
  }

  displayFavs() {
    this.setState({
      panelToDisplay: 'favs'
    });
  }

  render() {
    const { stationsToDisplay, panelToDisplay } = this.state;
    const panel = panelToDisplay;


    return (
      <div className="App container-fluid">
        <div className="row">
          <Navbar
            displayWhat={this.displayWhat}
          />
        </div>
        <div className="row">
          <SideMenu displayWhat={this.displayWhat} />
          <MapContainer stationsToDisplay={stationsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
