import React, { Component } from 'react';
import Favorites from './Favorites';
import NavigationModule from './NavigationModule';
import StationsToDisplayMenu from './StationsToDisplayMenu';

import '../SideMenu.css';

class SideMenu extends Component {
  render() {
    const {
      selectNavigation,
      itinerary,
      handleFilterChange,
      minBikesToDisplay,
      minStandsToDisplay
    } = this.props;

    return (
      <div id="SideMenu" className="col-md-3 p-2">
        <StationsToDisplayMenu
          minBikesToDisplay={minBikesToDisplay}
          minStandsToDisplay={minStandsToDisplay}
          handleFilterChange={handleFilterChange}
        />
        <NavigationModule
          itinerary={itinerary}
          selectNavigation={selectNavigation}
        />
        <Favorites />
      </div>
    );
  }
}

export default SideMenu;
