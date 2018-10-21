import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MapContainer from './components/MapContainer';


import './App.css';
import './Navbar.css';
import './Map.css';
import './SideMenu.css';
import './PopupContent.css';
import FunctionalitiesLayer from './components/FunctionalitiesLayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationsToDisplay: 'all',
      panelToDisplay: 'none',
      itinerary: false,
      selectedOption: 'all'
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.displayWhat = this.displayWhat.bind(this);
    this.selectNavigation = this.selectNavigation.bind(this);
    this.displayFeature = this.displayFeature.bind(this);
  }

  handleRadioChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
    this.displayWhat(event.target.value);
  }

  selectNavigation() {
    const { itinerary } = this.state;
    this.setState(() => ({
      itinerary: !itinerary
    }));
  }

  displayWhat(stations) {
    this.setState({
      stationsToDisplay: stations
    });
  }

  displayFeature(panel) {
    const { panelToDisplay } = this.state;
    if (panelToDisplay === panel) {
      this.setState({
        panelToDisplay: ''
      });
    } else {
      this.setState({
        panelToDisplay: panel
      });
    }
  }

  displayFavs() {
    const { panelToDisplay } = this.state;
    if (panelToDisplay === 'favs') {
      this.setState({
        panelToDisplay: ''
      });
    } else {
      this.setState({
        panelToDisplay: 'favs'
      });
    }
  }

  displayFilter() {
    const { panelToDisplay } = this.state;
    if (panelToDisplay === 'filter') {
      this.setState({
        panelToDisplay: ''
      });
    } else {
      this.setState({
        panelToDisplay: 'filter'
      });
    }
  }

  render() {
    const {
      stationsToDisplay,
      panelToDisplay,
      selectedOption,
      itinerary
    } = this.state;

    return (
      <div className="App container-fluid">
        <div className="row">
          <Navbar
            displayWhat={this.displayWhat}
          />
        </div>
        <div className="row">
          <SideMenu
            displayWhat={this.displayWhat}
            handleRadioChange={this.handleRadioChange}
            selectNavigation={this.selectNavigation}
            itinerary={itinerary}
            selectedOption={selectedOption}
          />
          <FunctionalitiesLayer
            panelToDisplay={panelToDisplay}
            selectedOption={selectedOption}
            itinerary={itinerary}
            selectNavigation={this.selectNavigation}
          />
          <MapContainer
            stationsToDisplay={stationsToDisplay}
            displayFeature={this.displayFeature}
          />
        </div>
      </div>
    );
  }
}

export default App;
