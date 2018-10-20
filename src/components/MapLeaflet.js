import React, { Component, Fragment } from 'react';

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
      zoom: defaultCenter.zoom
    };
    this.centerMap = this.centerMap.bind(this);
  }

  centerMap(lat, long) {
    this.setState({
      viewCenter: [lat, long]
    });
  }


  render() {
    const { stationsToDisplay } = this.props;
    const { viewCenter, zoom } = this.state;

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
                />
                <MapControls
                  longitude={longitude}
                  latitude={latitude}
                  getCurrentPosition={getCurrentPosition}
                  centerMap={this.centerMap}
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
