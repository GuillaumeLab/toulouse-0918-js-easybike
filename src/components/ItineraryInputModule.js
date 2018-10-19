import React, { Component, Fragment } from 'react';

class ItineraryInputModule extends Component {
  render() {
    if (!this.props.itinerary) {
      return null;
    }
    return (
      <Fragment>
        <input type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="itinerary start" placeholder="Départ" />
        <input type="text" className="form-control my-2"id="exampleInputEmail1" aria-describedby="itinerary end" placeholder="Arrivée" />
      </Fragment>
    );
  }
}
export default ItineraryInputModule;
