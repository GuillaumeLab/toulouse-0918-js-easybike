import React from 'react';

const RefreshButton = ({ refreshStationsList }) => (
  <button
    type="button"
    className="map-button"
    onClick={refreshStationsList}
  >
    <i className="fas fa-sync-alt fa-2x" />
  </button>
);

export default RefreshButton;
