import React, { Component } from 'react';
import FilterByBikeInput from './FilterByBikeInput';
import FilterByStandInput from './FilterByStandInput';

class FilterPanel extends Component {
  render() {
    const { handleFilterChange, minBikesToDisplay, minStandsToDisplay } = this.props;

    return (
      <div className="filter-panel">
        <form>
          <h3>Filtrer par</h3>
          <div className="filters-container">
            <FilterByBikeInput
              className="filter-input"
              handleFilterChange={handleFilterChange}
              minBikesToDisplay={minBikesToDisplay}
            />
            <hr />
            <FilterByStandInput
              className="filter-input"
              handleFilterChange={handleFilterChange}
              minStandsToDisplay={minStandsToDisplay}
            />
          </div>
        </form>
      </div>
    );
  }
}


export default FilterPanel;
