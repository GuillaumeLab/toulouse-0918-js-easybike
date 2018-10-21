import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from './settings';

import {
  Map, TileLayer, Marker, Popup
} from 'react-leaflet';
import Geolocation from 'react-geolocation';
import MapControls from './MapControls';

import MarkersLayer from './MarkersLayer';


const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

class MapLeaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCenter: defaultCenter.center,
      zoom: defaultCenter.zoom,
      stationsList: [],
      isLoading: false,
      error: null,
      panelToDisplay: ''

    };
    this.clearError = this.clearError.bind(this);
    this.refreshStationsList = this.refreshStationsList.bind(this);
    this.centerMap = this.centerMap.bind(this);
  }

  componentDidMount() {
    this.refreshStationsList();
    this.interval = setInterval(this.refreshStationsList, 60000);
  }

  clearError() {
    this.setState({ error: null });
  }

  refreshStationsList() {
    console.log('refresh');
    this.setState({ error: null });
    const request = `https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${apiKey}`;
    this.setState({ isLoading: true });

    axios.get(request)
      .then(result => this.setState({
        stationsList: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  centerMap(lat, long) {
    this.setState({
      viewCenter: [lat, long]
    });
  }


  render() {
    const { stationsToDisplay, displayFeature } = this.props;
    const { viewCenter, zoom, stationsList } = this.state;

    return (
      <div className="map">
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

            console.log(`is fetching : ${fetchingPosition}, is user located : ${isUserLocated} `);
            console.log(`latitude = ${latitude} and longitude = ${longitude}`);
            const userMarker = isUserLocated
              ? (
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    <span>Votre position</span>
                  </Popup>
                </Marker>
              )
              : null;

            const setCenter = isUserLocated ? [latitude, longitude] : viewCenter;

            return (
              <Map center={setCenter} zoom={zoom} className="map__reactleaflet">
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                <MarkersLayer
                  stationsToDisplay={stationsToDisplay}
                  stationsList={stationsList}
                  error={error}
                  refreshStationsList={this.refreshStationsList}
                />
                <MapControls
                  longitude={longitude}
                  latitude={latitude}
                  getCurrentPosition={getCurrentPosition}
                  centerMap={this.centerMap}
                  refreshStationsList={this.refreshStationsList}
                  displayFeature={displayFeature}
                />
                {userMarker}
              </Map>
            );
          }
          }
        />
      </div>
    );
  }
}

export default MapLeaflet;
