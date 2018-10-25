import React, { Component } from 'react';

import AddressInputModule from './AddressInputModule';
import ItineraryInputModule from './ItineraryInputModule';

class SearchPanel extends Component {
  render() {
    const { selectNavigation, itinerary } = this.props;
    return (
      <div className="search-panel">
        <form>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="itinerary"
              onChange={selectNavigation}
              checked={itinerary}
            />
            <span> Rechercher un trajet</span>
          </div>
          <div className="form-group">
            <AddressInputModule classname="navigation-input" itinerary={itinerary} />
            <ItineraryInputModule itinerary={itinerary} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPanel;
