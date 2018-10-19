import React, { Component, Fragment } from 'react';

class AdressInputModule extends Component {
  render() {
    if (this.props.itinerary) {
      return null;
    }
    return (
      <Fragment>
        <input type="text" className="form-control" id="Adresse" aria-describedby="itinerary end" placeholder="Adresse" />
      </Fragment>
    );
  }
}
export default AdressInputModule;
