import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MapContainer from './components/MapContainer';
import FunctionalitiesLayer from './components/FunctionalitiesLayer';

import './App.css';
import './Navbar.css';
import './Map.css';
import './SideMenu.css';
import './PopupContent.css';
import './MobileFeatures.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minBikesToDisplay: 0,
      minStandsToDisplay: 0,
      panelToDisplay: 'none',
      itinerary: false,
      selectedOption: 'all'
    };
    this.displayWhat = this.displayWhat.bind(this);
    this.selectNavigation = this.selectNavigation.bind(this);
    this.displayFeature = this.displayFeature.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(key, increment) {
    this.setState(
      state => {
        if ((increment < 0 && state[key] > 0) || (increment > 0 && state[key] < 10)) {
          return {
            [key]: state[key] + increment,
            selectedOption: key
          };
        }
        return {};
      }
    );
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

  render() {
    const {
      stationsToDisplay,
      panelToDisplay,
      selectedOption,
      itinerary,
      minBikesToDisplay,
      minStandsToDisplay,
    } = this.state;

    return (
      <div className="App container-fluid">
        <div className="row">
          <Navbar
            displayWhat={this.displayWhat}
          />
        </div>
        <FunctionalitiesLayer
          panelToDisplay={panelToDisplay}
          itinerary={itinerary}
          selectNavigation={this.selectNavigation}
          handleFilterChange={this.handleFilterChange}
          minBikesToDisplay={minBikesToDisplay}
          minStandsToDisplay={minStandsToDisplay}
        />
        <div className="row">
          <SideMenu
            displayWhat={this.displayWhat}
            handleRadioChange={this.handleRadioChange}
            selectNavigation={this.selectNavigation}
            itinerary={itinerary}
            selectedOption={selectedOption}
            handleFilterChange={this.handleFilterChange}
            minBikesToDisplay={minBikesToDisplay}
            minStandsToDisplay={minStandsToDisplay}
          />
          <MapContainer
            stationsToDisplay={stationsToDisplay}
            displayFeature={this.displayFeature}
            minBikesToDisplay={minBikesToDisplay}
            minStandsToDisplay={minStandsToDisplay}
            selectedOption={selectedOption}
          />
        </div>
      </div>
    );
  }
}

export default App;
