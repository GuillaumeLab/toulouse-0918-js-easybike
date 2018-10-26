import React from 'react';
import mapButtonStyles from './mapButtonStyles';

const GeolocButton = ({
  getCurrentPosition,
  centerOnUser,
  userPosition
}) => (
  <button
    type="button"
    style={mapButtonStyles}
    className="map-button geoloc"
    onClick={() => {
      getCurrentPosition();
      centerOnUser(userPosition);
    }}
  />
);

export default GeolocButton;
