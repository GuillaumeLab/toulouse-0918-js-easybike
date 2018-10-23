import React from 'react';

const GeolocButton = ({ getCurrentPosition }) => (
  <button
    type="button"
    className="map-button geoloc"
    onClick={getCurrentPosition}
  />
);

export default GeolocButton;
