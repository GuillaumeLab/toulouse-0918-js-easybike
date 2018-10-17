import React, { Component } from 'react';
import Geolocation from 'react-geolocation';
import { Marker, Popup } from 'react-leaflet';

class UserPositionLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMarker: usersMarkerDefault.center
    };
  }

  render() {
    const usersMarkerDefault = {
      center: [43.599927, 1.443197],
      zoom: 15
    };
    const [defaultLatUser, defaultLongUser] = usersMarkerDefault.center;

    return (
      <div>
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => {
            if (!latitude || !longitude) {
              latitude = defaultLatUser;
              latitude = defaultLatUser; longitude = defaultLongUser;
              longitude = defaultLongUser;
            }
            return (
              <Map center={[latitude, longitude]} zoom={usersMarkerDefault.zoom} className="map__reactleaflet">
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
  }
}

export default UserPositionLayer;
