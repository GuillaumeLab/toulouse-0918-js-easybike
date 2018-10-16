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
          }) => (
              <div>
                <button onClick={getCurrentPosition}>Get Position</button>
                {error &&
                  <div>
                    {error.message}
                  </div>}
                <pre>
                  latitude: {latitude}
                  longitude: {longitude}
                </pre>
              </div>
            )}
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <span>USER</span>
          </Popup>
        </Marker>

      </div>
    );
  }
}

export default UserPositionLayer;
