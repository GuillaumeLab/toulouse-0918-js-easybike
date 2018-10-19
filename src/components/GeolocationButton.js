import React, { Component } from 'react';

import Control from 'react-leaflet-control';
import { geolocIcon } from '../images/geoloc-icon.svg';


const GeolocationButton = () => (
  <div>
    <button type="button">
      <img src={geolocIcon} alt="target icon" />
    </button>
  </div>
);
export default GeolocationButton;
