import React, { Component } from 'react';
import ItineraryInputModule from './ItineraryInputModule';
import AddressInputModule from './AddressInputModule';

class NavigationModule extends Component {
  render() {
    const { itinerary, selectNavigation, userPosition } = this.props;
    return (
      <div className="card my-2">
        <div className="card-header font-weight-bold">Navigation</div>
        <div className="card-body p-2">
          <div className="card-text">
            <div>
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
                <AddressInputModule itinerary={itinerary} userPosition={userPosition} />
                <ItineraryInputModule itinerary={itinerary} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default NavigationModule;
