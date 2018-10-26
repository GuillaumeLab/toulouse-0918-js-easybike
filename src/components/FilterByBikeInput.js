import React, { Component } from 'react';

class FilterByBikeInput extends Component {
  render() {
    const { handleFilterChange, minBikesToDisplay } = this.props;
    const DisplayPlus = minBikesToDisplay !== 15
      ? (<button type="button" onClick={() => handleFilterChange('minBikesToDisplay', +1)}> + </button>)
      : null;

    const DisplayLess = minBikesToDisplay !== 0
      ? (<button type="button" onClick={() => handleFilterChange('minBikesToDisplay', -1)}> - </button>)
      : null;

    return (
      <div className="filter-input">
        <p>Nombre de vélos disponibles</p>
        {DisplayLess}
        <input type="text" value={minBikesToDisplay} readOnly />
        {DisplayPlus}
      </div>
    );
  }
}

export default FilterByBikeInput;
