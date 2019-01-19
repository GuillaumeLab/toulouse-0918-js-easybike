import React, { Component } from 'react';

import AddressInputModule from './AddressInputModule';
import ItineraryInputModule from './ItineraryInputModule';

class SearchPanel extends Component {
  render() {
    const { selectNavigation, itinerary } = this.props;
    return (
      <div className="search-panel">
        <form>
          <h3>Navigation</h3>
          <div className="search-container">
            <input
              type="checkbox"
              id="itinerary"
              onChange={selectNavigation}
              checked={itinerary}
            />
            <span> Rechercher un trajet</span>
            <div className="form-group">
              <AddressInputModule classname="navigation-input" itinerary={itinerary} />
              <ItineraryInputModule itinerary={itinerary} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPanel;
