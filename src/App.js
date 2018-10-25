import React, { Component } from 'react';
import Geolocation from 'react-geolocation';
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
import './Favorites.css';

const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

class App extends Component {
  constructor(props) {
    super(props);
    const favStationsId = this.readStoredFav();
    this.state = {
      stationsToDisplay: 'all',
      panelToDisplay: 'none',
      itinerary: false,
      selectedOption: 'all',
      favStations: [],
      favStationsId : favStationsId,
      currentFavorite : [],
      viewCenter: defaultCenter.center,
      userPosition: []
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.displayWhat = this.displayWhat.bind(this);
    this.selectNavigation = this.selectNavigation.bind(this);
    this.displayFeature = this.displayFeature.bind(this);
    this.updateStationsList = this.updateStationsList.bind(this);
  }

  readStoredFav() {
    let favIds = JSON.parse(localStorage.getItem('favorites'));
    return favIds || [];
  }

  updateStationsList(stationsList) {
    const favorites = stationsList.filter(station => station.isFavorite);

    this.setState({
      favStations : favorites
    });
  }

//  getUserPosition(userPosition) {
//    console.log(userPosition)
//    // this.setState({
//    //   userPosition: userPosition
//    // });
//  }

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
      itinerary,
      favStationsId,
      favStations,
      viewCenter
    } = this.state;

    return (

      <Geolocation
        lazy
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) => {
          let isUserLocated = false;
          if (!latitude || !longitude) {
            isUserLocated = false;
          } else {
            isUserLocated = true;
          }

          const userPosition = isUserLocated ? [latitude, longitude] : viewCenter;

          return (
            <div className="App container-fluid">
              <div className="row">
                <Navbar
                  displayWhat={this.displayWhat}
                />
              </div>
              <FunctionalitiesLayer
                panelToDisplay={panelToDisplay}
                selectedOption={selectedOption}
                itinerary={itinerary}
                selectNavigation={this.selectNavigation}
                handleRadioChange={this.handleRadioChange}
              />
              <div className="row">
                <SideMenu
                  displayWhat={this.displayWhat}
                  handleRadioChange={this.handleRadioChange}
                  selectNavigation={this.selectNavigation}
                  itinerary={itinerary}
                  selectedOption={selectedOption}
                  userPosition={userPosition}
                  favStations={favStations}
                />
                <MapContainer
                  stationsToDisplay={stationsToDisplay}
                  displayFeature={this.displayFeature}
                  updateStationsList={this.updateStationsList}
                  favStationsId={favStationsId}
                  getUserPosition={this.getUserPosition}
                  geolocationError={error}
                  getCurrentPosition={getCurrentPosition}
                  userPosition={userPosition}
                  isUserLocated={isUserLocated}
                />
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
