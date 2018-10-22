import React from 'react';

const FilterByStandInput = ({ handleFilterChange, minStandsToDisplay }) => (
  <div>
    <p>Filtrer par nombre minimum de d&apos;emplacements disponibles</p>
    <button type="button" onClick={() => handleFilterChange('minStandsToDisplay', -1)}>
      -
    </button>

    <span>{minStandsToDisplay}</span>

    <button type="button" onClick={() => handleFilterChange('minStandsToDisplay', 1)}>
      +
    </button>
  </div>
);

export default FilterByStandInput;
