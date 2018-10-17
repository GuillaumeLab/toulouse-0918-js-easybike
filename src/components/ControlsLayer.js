import React from 'react';
import Control from 'react-leaflet-control';
import GeolocationButton from './GeolocationButton';

const ControlsLayer = () => (
  <Control position="topright">
    <GeolocationButton />
  </Control>
);

export default ControlsLayer;
