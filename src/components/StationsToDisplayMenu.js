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
          <div className="card-header font-weight-bold">Affichage des stations</div>
          <div className="card-body">
            <div className="card-text py-2">
              <form className="px-2">
                <div className="stations-to-display">
                  <FilterByBikeInput
                    handleFilterChange={handleFilterChange}
                    minBikesToDisplay={minBikesToDisplay}
                  />
                  <FilterByStandInput
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
