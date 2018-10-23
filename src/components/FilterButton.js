import React from 'react';

const FilterButton = ({ displayFeature}) => (
  <button
    type="button"
    className="map-button filter display-button"
    onClick={() => displayFeature('filter')}
  />
);

export default FilterButton;
