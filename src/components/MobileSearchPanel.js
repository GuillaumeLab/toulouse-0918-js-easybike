import React, { Component } from 'react';

import AdressInputModule from './AdressInputModule';
import ItineraryInputModule from './ItineraryInputModule';

class MobileSearchPanel extends Component {
  render() {
    const { selectNavigation, itinerary } = this.props;
    return (
      <div className="mobile-search-panel">
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
            <AdressInputModule classname="navigation-input" itinerary={itinerary} />
            <ItineraryInputModule itinerary={itinerary} />
            <button type="button" className="btn btn-primary mt-2">Rechercher</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MobileSearchPanel;
