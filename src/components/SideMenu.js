import React, { Component } from 'react';
import Favorites from './Favorites';
import NavigationModule from './NavigationModule';
import StationsToDisplayMenu from './StationsToDisplayMenu';

import '../SideMenu.css';

class SideMenu extends Component {
  render() {
    const { displayWhat, handleRadioChange, selectNavigation, selectedOption, itinerary, favStations, showCurrentFavorite, userPosition } = this.props;

    return (
      <div id="SideMenu" className="col-md-3 p-2">
        <StationsToDisplayMenu
          displayWhat={displayWhat}
          selectedOption={selectedOption}
          handleRadioChange={handleRadioChange}
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

export default SideMenu;
