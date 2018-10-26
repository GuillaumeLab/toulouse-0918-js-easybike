import React from 'react';
import mapButtonStyles from './mapButtonStyles';

const FilterButton = ({ displayFeature}) => (
  <button
    type="button"
    style={mapButtonStyles}
    className="map-button filter display-button"
    onClick={() => displayFeature('filter')}
  />
);

export default FilterButton;
