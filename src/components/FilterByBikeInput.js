import React from 'react';

const FilterByBikeInput = ({ handleFilterChange, minBikesToDisplay }) => (
  <div className="filter-input">
    <p>Nombre de vélos disponibles</p>
    <button type="button" onClick={() => handleFilterChange('minBikesToDisplay', -1)}>
      -
    </button>
    <input type="text" value={minBikesToDisplay} readOnly />
    <button type="button" onClick={() => handleFilterChange('minBikesToDisplay', 1)}>
      +
    </button>
  </div>
);

export default FilterByBikeInput;
