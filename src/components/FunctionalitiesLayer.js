import React, { Component } from 'react';

import SearchPanel from './SearchPanel';
import FilterPanel from './FilterPanel';
import FavsPanel from './FavsPanel';

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
      selectNavigation,
      handleFilterChange,
      minBikesToDisplay,
      minStandsToDisplay
    } = this.props;

    if (panelToDisplay === 'search') {
      return (
        <SearchPanel
          itinerary={itinerary}
          selectNavigation={selectNavigation}
        />
      );
    }
    if (panelToDisplay === 'favs') {
      return (
        <FavsPanel
          classname="favs-panel"
        />
      );
    }
    if (panelToDisplay === 'filter') {
      return (
        <FilterPanel
          handleFilterChange={handleFilterChange}
          minBikesToDisplay={minBikesToDisplay}
          minStandsToDisplay={minStandsToDisplay}
        />
      );
    }
    return null;
  }
}

export default FunctionalitiesLayer;
