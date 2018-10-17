import React, { Component } from 'react';
import ItineraryInputModule from './ItineraryInputModule';
import AdressInputModule from './AdressInputModule';

class NavigationModule extends Component {

  constructor (props) {
    super(props);
    this.state = {
      itinerary : false
    };
    this.selectNavigation = this.selectNavigation.bind(this);
  }

  selectNavigation() {
    this.setState ({
      itinerary : !this.state.itinerary
    });
  };
 
  render() {
    return (
      <div className="container">
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
                  checked={this.state.itinerary}
                />
                <span> Rechercher un trajet</span>
              </div>
              <form>
                <div class="form-group">
                  <AdressInputModule itinerary={this.state.itinerary} />
                  <ItineraryInputModule itinerary={this.state.itinerary} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default NavigationModule;