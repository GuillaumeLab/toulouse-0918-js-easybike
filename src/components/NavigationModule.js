import React, { Component } from 'react';
import ItineraryInputModule from './ItineraryInputModule';
import AdressInputModule from './AdressInputModule';

class NavigationModule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itinerary: false
    };
    this.selectNavigation = this.selectNavigation.bind(this);
  }

  selectNavigation() {
    const { itinerary } = this.state;
    this.setState(() => ({
      itinerary: !itinerary
    }));
  }

  render() {
    const { itinerary } = this.state;
    return (
      <div className="card my-2">
        <div className="card-header font-weight-bold">NAVIGATION</div>
        <div className="card-body p-2">
          <div className="card-text">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="itinerary"
                onChange={this.selectNavigation}
                checked={itinerary}
              />
              <span> Rechercher un trajet</span>
            </div>
            <form>
              <div className="form-group">
                <AdressInputModule itinerary={itinerary} />
                <ItineraryInputModule itinerary={itinerary} />
                <button type="button" className="btn btn-primary mt-2">Rechercher</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};


export default NavigationModule;