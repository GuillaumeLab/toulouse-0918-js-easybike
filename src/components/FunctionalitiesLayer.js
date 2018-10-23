import React, { Component } from 'react';

import Favorites from './Favorites';
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
      selectedOption,
      selectNavigation,
      handleRadioChange
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
          selectedOption={selectedOption}
          handleRadioChange={handleRadioChange}
        />
      );
    }
    return null;
  }
}

export default FunctionalitiesLayer;
