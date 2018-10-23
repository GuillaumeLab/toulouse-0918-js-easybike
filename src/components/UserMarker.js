import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

class UserMarker extends Component {
  render() {
    const { latitude, longitude, isUserLocated } = this.props;
    const userMarker = isUserLocated
      ? (
        <Marker position={[latitude, longitude]}>
          <Popup>
            <span>Votre position</span>
          </Popup>
        </Marker>
      )
      : null;

    return (
      { userMarker }
    );
  }
}


export default UserMarker;
