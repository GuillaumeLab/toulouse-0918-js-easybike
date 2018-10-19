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
    let [defaultLatUser, defaultLongUser] = defaultCenter.center;
    let { center, zoom } = this.state;
    return (
      <div className="map">
        <Geolocation
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
              <Fragment>
                <Map center={center} zoom={zoom} onZoomLevelsChange={console.log()} className="map__reactleaflet">
                  <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                  <MarkersLayer />
                  <MapControls
                    lat={latitude}
                    lng={longitude}
                    centerMap={this.centerMap}
                  />
                  <Marker position={[latitude, longitude]}>
                    <Popup>
                      <span>USER</span>
                    </Popup>
                  </Marker>
                </Map>
              </Fragment>
            );
          }
          }
        />
      </div>
    );
  }
}

export default MapLeaflet;
