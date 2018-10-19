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
    const { stationsToDisplay } = this.props;
    const { center, zoom } = this.state;

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
            let isUserLocated = true;
            if (!latitude || !longitude) {
              isUserLocated = false;
            }
            const user = isUserLocated
              ? (
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    <span>USER</span>
                  </Popup>
                </Marker>
              )
              : null;

            return (
              <Map center={center} zoom={zoom} className="map__reactleaflet">
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                <MarkersLayer
                  stationsToDisplay={stationsToDisplay}
                />
                <MapControls
                  lat={latitude}
                  lng={longitude}
                  centerMap={this.centerMap}
                />
                {user}
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
