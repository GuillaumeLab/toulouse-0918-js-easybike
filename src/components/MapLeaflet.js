import React, { Component } from 'react';
import axios from 'axios';

import {
  Map, TileLayer, type Viewport
} from 'react-leaflet';

import { apiKey } from './settings';

import MapControls from './MapControls';
import MarkersLayer from './MarkersLayer';
import UserMarker from './UserMarker';

const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

class MapLeaflet extends Component<
  {},
  { viewport: Viewport },
  > {
  state = {
    viewport: defaultCenter,
  }

  constructor(props) {
    super(props);
    this.state = {
      zoom: defaultCenter.zoom,
      stationsList: [],
      apiDataError: null,
      isLoading: false,
      panelToDisplay: ''
    };
    this.refreshStationsList = this.refreshStationsList.bind(this);
    this.centerOnUser = this.centerOnUser.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  clearError() {
    this.setState({ apiDataError: null });
  }

  componentDidMount() {
    this.refreshStationsList();
    this.interval = setInterval(this.refreshStationsList, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  centerOnUser(userPosition) {
    this.setState({
      viewport: {
        center: userPosition,
        zoom: 15
      }
    })
  }

  refreshStationsList() {
    const { updateFavStationsList, readStoredFav } = this.props;
    // console.log('refresh');
    const request = `https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${apiKey}`;
    this.setState({ isLoading: true });

    const favStationsId = readStoredFav();

    axios.get(request)
      .then(result => {
        const stationsList = result.data.map(
          station => {
            const isFavorite = favStationsId.includes(station.number);
            return { ...station, isFavorite: isFavorite }
          }
        );
        this.setState({
          stationsList: stationsList,
          isLoading: false
        })
        updateFavStationsList(stationsList);
      })
      .catch(error => this.setState({
        apiDataError: error,
        isLoading: false
      }));
  }

  render() {

    const {
      stationsToDisplay,
      displayFeature,
      minStandsToDisplay,
      minBikesToDisplay,
      selectedOption,
      handleFavList,
      favStationsId,
      getCurrentPosition,
      userPosition,
      isUserLocated,
    } = this.props;

    const { zoom, stationsList, viewport, apiDataError } = this.state;
    const [latitude, longitude] = userPosition;

    // console.log(`is fetching : ${fetchingPosition}, is user located : ${isUserLocated} `);
    // console.log(`latitude = ${latitude} and longitude = ${longitude}`);

    return (
      <div className="map">
        <Map
          className="map__reactleaflet"
          center={userPosition}
          zoom={zoom}
          onClick={displayFeature}
          viewport={viewport}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <MarkersLayer
            stationsToDisplay={stationsToDisplay}
            stationsList={stationsList}
            refreshStationsList={this.refreshStationsList}
            minStandsToDisplay={minStandsToDisplay}
            minBikesToDisplay={minBikesToDisplay}
            selectedOption={selectedOption}
            handleFavList={handleFavList}
            favStationsId={favStationsId}
            userPosition={userPosition}
            apiDataError={apiDataError}
            clearError={this.clearError}
          />
          <MapControls
            getCurrentPosition={getCurrentPosition}
            centerOnUser={this.centerOnUser}
            refreshStationsList={this.refreshStationsList}
            displayFeature={displayFeature}
          />
          <UserMarker
            latitude={latitude}
            longitude={longitude}
            isUserLocated={isUserLocated}
          />
        </Map>
        );
      }}
    />
      </div>
    );
  }
}

export default MapLeaflet;
