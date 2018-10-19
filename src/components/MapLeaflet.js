import React, { Component, Fragment } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Geolocation from 'react-geolocation';
import MapControls from './MapControls';

import MarkersLayer from './MarkersLayer';


const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

// const mapConfig = {
//   center: [43.6036786, 1.4328012],
//   zoom: 15
// };

class MapLeaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: defaultCenter.center,
      zoom: defaultCenter.zoom
    };
    this.centerMap = this.centerMap.bind(this);
  }

  centerMap(lat, lng) {
    this.setState({
      center: [lat, lng]
    });
  }

  render() {
    const { stationsToDisplay } = this.props;
    let [defaultLatUser, defaultLongUser] = defaultCenter.center;
    let { center, zoom } = this.state;
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
            //     <div>{error.message}</div>
            if (!latitude || !longitude) {
              latitude = defaultLatUser;
              longitude = defaultLongUser;
            }
            return (
              <Map center={center} zoom={zoom} className="map__reactleaflet">
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                <MarkersLayer
                  stationsToDisplay={this.props.stationsToDisplay}
                  lat={latitude}
                  lng={longitude}
                  centerMap={this.centerMap}
                />
                <MapControls />
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    <span>USER</span>
                  </Popup>
                </Marker>
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
