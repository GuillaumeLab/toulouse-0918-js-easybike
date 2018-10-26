import React, { Component } from 'react';
import FilterByBikeInput from './FilterByBikeInput';
import FilterByStandInput from './FilterByStandInput';

class StationToDisplayMenu extends Component {
  render() {
    const {
      handleFilterChange,
      minBikesToDisplay,
      minStandsToDisplay
    } = this.props;
    return (
      <div>
        <div className="card">
          <div className="card-header font-weight-bold">Filtrage des stations</div>
          <div className="card-body">
            <div className="card-text py-2">
              <form className="px-2">
                <div className="stations-to-display">
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
          </div>
        </div>
      </div>
    );
  }
}
export default StationToDisplayMenu;
