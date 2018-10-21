import React, { Component, Fragment } from 'react';

import './map.css';
import Favorites from './Favorites';
import AdressInputModule from './AdressInputModule';
import ItineraryInputModule from './ItineraryInputModule';
import MobileSearchPanel from './MobileSearchPanel';

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
      selectNavigation 
    } = this.props;

    if (panelToDisplay === 'search') {
      return (
        <MobileSearchPanel
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
        <div className="feature-panel">
          <form className="px-2">
            <div className="stations-to-display">
              <input name="stations" id="all-bikes" type="radio" value="all" checked={selectedOption === 'all'} onChange={this.handleRadioChange} aria-label="Display all stations" />
              <label htmlFor="all-bikes">Toutes les stations</label>
            </div>
            <div className="stations-to-display">
              <input name="stations" id="only-bikes" type="radio" value="bikes" checked={selectedOption === 'bikes'} onChange={this.handleRadioChange} aria-label="Display stations with bikes" />
              <label htmlFor="only-bikes">Seulement les stations avec vélos</label>
            </div>
            <div className="stations-to-display">
              <input name="stations" id="only-free-spaces" type="radio" value="freeSpaces" checked={selectedOption === 'freeSpaces'} onChange={this.handleRadioChange} aria-label="Display stations with free bikes stands" />
              <label htmlFor="only-free-spaces">Seulement les stations avec emplacements disponibles</label>
            </div>
          </form>
        </div>
      );
    }
    return null;
  }
}

export default FunctionalitiesLayer;
