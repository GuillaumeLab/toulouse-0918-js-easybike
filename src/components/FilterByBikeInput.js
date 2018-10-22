import React from 'react';

const FilterByBikeInput = ({ handleFilterChange, minBikesToDisplay }) => (
  <div>
    <p>Filtrer par nombre minimum vélos disponibles</p>
    <button type="button" onClick={() => handleFilterChange('minBikesToDisplay', -1)}>
      -
    </button>
    <span>{minBikesToDisplay}</span>
    <button type="button" onClick={() => handleFilterChange('minBikesToDisplay', 1)}>
      +
    </button>
  </div>
);

export default FilterByBikeInput;
