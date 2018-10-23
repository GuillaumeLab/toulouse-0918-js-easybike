import React from 'react';

const GeolocButton = ({
  getCurrentPosition,
  centerOnUser,
  userPosition
}) => (
  <button
    type="button"
    className="map-button geoloc"
    onClick={() => {
      getCurrentPosition();
      centerOnUser(userPosition);
    }}
  />
);

export default GeolocButton;
