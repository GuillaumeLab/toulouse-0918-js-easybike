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
      minBikesToDisplay: 0,
      minStandsToDisplay: 0,
      panelToDisplay: 'none',
      itinerary: false,
      selectedOption: 'all',
      favStations: [],
      favStationsId,
      currentFavorite: [],
      viewCenter: defaultCenter.center,
      userPosition: []
    };
    this.selectNavigation = this.selectNavigation.bind(this);
    this.displayFeature = this.displayFeature.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.updateStationsList = this.updateStationsList.bind(this);
    this.handleFavList = this.handleFavList.bind(this);
  }

  handleFilterChange(key, increment) {
    this.setState(
      state => {
        if ((increment < 0 && state[key] > 0) || (increment > 0 && state[key] < 15)) {
          return {
            [key]: state[key] + increment,
            selectedOption: key
          };
        }
        return {};
      }
    );
  }

  readStoredFav() {
    const favIds = JSON.parse(localStorage.getItem('favorites'));
    return favIds || [];
  }

  addFavorite(stationNumber) {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]));  
    }
    const previousFavList = JSON.parse(localStorage.getItem('favorites'));
    localStorage.setItem('favorites', JSON.stringify([...previousFavList, stationNumber]));
  }

  removeFavorite(stationNumber) {
    const previousFavList = JSON.parse(localStorage.getItem('favorites'));
    const iDToRemove = previousFavList.findIndex(id => id === stationNumber);
    previousFavList.splice(iDToRemove, 1);
    localStorage.setItem('favorites', JSON.stringify(previousFavList));
  }

  updateStationsList(stationsList) {
    const favorites = stationsList.filter(station => station.isFavorite);
    this.setState({
      favStationsId: this.readStoredFav(),
      favStations: favorites
    });
    console.log('Liste des stations à afficher :', this.state.favStations);
    console.log(`Liste des stations à dans localStorage : ${this.state.favStationsId}`);
  }

  handleFavList(stationNumber) {
    const { favStationsId } = this.state;
    if (favStationsId.includes(stationNumber)) {
      this.removeFavorite(stationNumber);
    } else {
      this.addFavorite(stationNumber);
    }
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
                itinerary={itinerary}
                selectNavigation={this.selectNavigation}
                minBikesToDisplay={minBikesToDisplay}
                minStandsToDisplay={minStandsToDisplay}
                handleFilterChange={this.handleFilterChange}
                favStations={favStations}
              />
              <div className="row">
                <SideMenu
                  displayWhat={this.displayWhat}
                  selectNavigation={this.selectNavigation}
                  itinerary={itinerary}
                  selectedOption={selectedOption}
                  userPosition={userPosition}
                  favStations={favStations}
                  minBikesToDisplay={minBikesToDisplay}
                  minStandsToDisplay={minStandsToDisplay}
                  handleFilterChange={this.handleFilterChange}
                  handleRadioChange={this.handleRadioChange}
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
                  minBikesToDisplay={minBikesToDisplay}
                  minStandsToDisplay={minStandsToDisplay}
                  readStoredFav={this.readStoredFav}
                  handleFavList={this.handleFavList}
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
