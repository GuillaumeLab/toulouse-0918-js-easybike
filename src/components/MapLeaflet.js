import React, { Component, Fragment } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Geolocation from 'react-geolocation';
import Control from 'react-leaflet-control';

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
      centerMap: defaultCenter.center,
      zoom: defaultCenter.zoom
    };
  }

  componentWillMount() {
    this.forceUpdate();
  }

  render() {
    let [defaultLatUser, defaultLongUser] = defaultCenter.center;
    let center = this.state.centerMap;
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
              <Fragment>
                <Map center={ center } zoom={this.state.zoom} className="map__reactleaflet">
                  <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                  <MarkersLayer />
                  <Control position="topright">
                    <button type="button" onClick={getCurrentPosition}>
                      Reset View
                    </button>
                  </Control>
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
