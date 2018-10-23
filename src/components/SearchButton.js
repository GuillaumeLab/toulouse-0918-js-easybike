import React from 'react';

const SearchButton = ({ displayFeature }) => (
  <button
    type="button"
    className="map-button search display-button"
    onClick={() => displayFeature('search')}
  />
);

export default SearchButton;
