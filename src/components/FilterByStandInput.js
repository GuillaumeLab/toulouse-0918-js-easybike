import React from 'react';

const FilterByStandInput = ({ handleFilterChange, minStandsToDisplay }) => (
  <div className="filter-input">
    <p>Nombre d&apos;emplacements disponibles</p>
    <div>
      <button type="button" onClick={() => handleFilterChange('minStandsToDisplay', -1)}>
        -
      </button>
      <span>{minStandsToDisplay}</span>
      <button type="button" onClick={() => handleFilterChange('minStandsToDisplay', 1)}>
        +
      </button>
    </div>
    {/* <div className="slidecontainer">
      <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
    </div> */}
  </div>
);

export default FilterByStandInput;
