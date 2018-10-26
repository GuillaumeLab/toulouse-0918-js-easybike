import React, { Component } from 'react';

class FilterByStandInput extends Component {
  render() {
    const { handleFilterChange, minStandsToDisplay } = this.props;
    const DisplayPlus = minStandsToDisplay !== 15
      ? (<button type="button" onClick={() => handleFilterChange('minStandsToDisplay', +1)}> + </button>)
      : null;

    const DisplayLess = minStandsToDisplay !== 0
      ? (<button type="button" onClick={() => handleFilterChange('minStandsToDisplay', -1)}> - </button>)
      : null;

    return (
      <div className="filter-input">
        <p>Nombre d&apos;emplacements disponibles</p>
        <div>
          {DisplayLess}
          <input type="text" value={minStandsToDisplay} readOnly />
          {DisplayPlus}
        </div>
      </div>
    );
  }
}

export default FilterByStandInput;
