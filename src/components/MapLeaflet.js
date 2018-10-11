import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';

import MarkersLayer from './MarkersLayer';
import Geolocation from 'react-geolocation';



const usersMarkerDefault = {
  center: [43.599927, 1.443197],
  zoom: 20
};

const mapConfig = {
  center: [43.6036786, 1.4328012],
  zoom: 15
};

class MapLeaflet extends Component {43.6036786
  constructor(props) {
    super(props);
    this.state = {
      userMarker : usersMarkerDefault.center
    };
  }

  render() {
    let [defaultLatUser,defaultLongUser] = usersMarkerDefault.center;
    return (
      <div className="map ">
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => 
            {
              //     <div>{error.message}</div>
                if(!latitude || !longitude) {
                  latitude = defaultLatUser;
                  longitude = defaultLongUser;
                }
              return (
                  <Map center={[latitude,longitude]} zoom={mapConfig.zoom} className="map__reactleaflet">
                    <TileLayer
                      url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                    />
                    <MarkersLayer />
                    <Marker position={[latitude, longitude]} >
                      <Popup>
                        <span>USER</span>
                      </Popup>
                    </Marker>
                  </Map>
              )
            }
          }
        />

      </div>
    );
  }
}

export default MapLeaflet;
