import React, { Component } from 'react';

import Favorites from './Favorites';
import MobileSearchPanel from './MobileSearchPanel';
import FilterPanel from './FilterPanel';

class FunctionalitiesLayer extends Component {
  componentDidMount() {
    this.timerID = setTimeout(
      this.forceUpdate(),
      200
    );
  }

  render() {
    const {
      panelToDisplay,
      itinerary,
      selectedOption,
      selectNavigation,
      handleRadioChange 
    } = this.props;

    if (panelToDisplay === 'search') {
      return (
        <MobileSearchPanel
          className="mobile-search-panel"
          itinerary={itinerary}
          selectNavigation={selectNavigation}
        />
      );
    }
    if (panelToDisplay === 'favs') {
      return (
        <div className="feature-panel">
          <Favorites />
        </div>
      );
    }
    if (panelToDisplay === 'filter') {
      return (
        <FilterPanel
          selectedOption={selectedOption}
          handleRadioChange={handleRadioChange}
        />
      );
    }
    return null;
  }
}

export default FunctionalitiesLayer;
