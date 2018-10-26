import React from 'react';
import mapButtonStyles from './mapButtonStyles';

const RefreshButton = ({ refreshStationsList }) => (
  <button
    type="button"
    style={mapButtonStyles}
    className="map-button"
    onClick={refreshStationsList}
  >
    <i className="fas fa-sync-alt fa-2x" />
  </button>
);

export default RefreshButton;
