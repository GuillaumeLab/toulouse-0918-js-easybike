import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Geolocation from 'react-geolocation';

import MarkersLayer from './MarkersLayer';


const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

class MapLeaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerMap: defaultCenter.center,
      zoom: defaultCenter.zoom
    };
  }

  render() {
    const { stationsToDisplay } = this.props;
    let [defaultLatUser, defaultLongUser] = defaultCenter.center;
    let center = this.state.centerMap;
    return (
      <div className="map">
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => {
            if (!latitude || !longitude) {
              latitude = defaultLatUser;
              longitude = defaultLongUser;
            }
            return (
              <Map center={center} zoom={this.state.zoom} className="map__reactleaflet">
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                <MarkersLayer stationsToDisplay={stationsToDisplay} />
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
