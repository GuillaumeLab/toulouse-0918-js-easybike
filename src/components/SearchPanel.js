import React, { Component } from 'react';

import AdressInputModule from './AdressInputModule';
import ItineraryInputModule from './ItineraryInputModule';

class SearchPanel extends Component {
  render() {
    const { selectNavigation, itinerary } = this.props;
    return (
      <div className="search-panel">
        <form>
          <h3>Recherche</h3>
          <div className="search-container">
            <input
              type="checkbox"
              id="itinerary"
              onChange={selectNavigation}
              checked={itinerary}
            />
            <span> Rechercher un trajet</span>
            <div className="form-group">
              <AdressInputModule itinerary={itinerary} />
              <ItineraryInputModule itinerary={itinerary} />
              <button type="button" className="btn btn-primary mt-2">Rechercher</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPanel;
