import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favorites from './Favorites';
import NavigationModule from './NavigationModule';
import FilterModule from './FilterModule';

import '../SideMenu.css';

class SideMenu extends Component {
  render() {
    const {
      selectNavigation,
      itinerary,
      handleFilterChange,
      minBikesToDisplay,
      minStandsToDisplay,
      favStations,
      userPosition,
    } = this.props;

    return (
      <div id="SideMenu" className="col-md-3 p-2">
        <FilterModule
          minBikesToDisplay={minBikesToDisplay}
          minStandsToDisplay={minStandsToDisplay}
          handleFilterChange={handleFilterChange}
        />
        <NavigationModule
          itinerary={itinerary}
          selectNavigation={selectNavigation}
          userPosition={userPosition}
        />
        <Favorites
          favStations={favStations}
        />
      </div>
    );
  }
}

SideMenu.propTypes = {
  selectNavigation: PropTypes.func,
  handleFilterChange: PropTypes.func,
  itinerary: PropTypes.bool,
  minBikesToDisplay: PropTypes.number,
  minStandsToDisplay: PropTypes.number,
};

SideMenu.defaultProps = {
  selectNavigation: PropTypes.func,
  handleFilterChange: PropTypes.func,
  itinerary: PropTypes.bool,
  minBikesToDisplay: PropTypes.number,
  minStandsToDisplay: PropTypes.number,
};


export default SideMenu;
