import React from 'react';
import mapButtonStyles from './mapButtonStyles';

const SearchButton = ({ displayFeature }) => (
  <button
    type="button"
    style={mapButtonStyles}
    className="map-button search display-button"
    onClick={() => displayFeature('search')}
  />
);

export default SearchButton;
