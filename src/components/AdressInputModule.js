import React, { Component, Fragment } from 'react';

const getItinararyUrl = (str2) => {
  console.log(str2);
  const generateUrl = (`https://www.google.com/maps/dir/?api=1&origin=capitol+toulouse&destination=${str2}+toulouse&travelmode=bicycling`);
  return generateUrl;
};

class AdressInputModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: ''
    };
    this.handleChangeDestination = this.handleChangeDestination.bind(this);
  }

  handleChangeDestination(event) {
    console.log(event.target.value);
    this.setState({ destination: event.target.value });
  }

  render() {
    const { destination } = this.state;
    if (this.props.itinerary) {
      return null;
    }
    return (
      <Fragment>
        <input onChange={this.handleChangeDestination} type="text" className="form-control" id="Adresse" aria-describedby="itinerary end" placeholder="Adresse" />
        <br />
        <a className="btn btn-primary" href={getItinararyUrl(destination)} target="_blank" rel="noopener noreferrer" role="button">Calcul d&apos;itinéraire</a>
      </Fragment>
    );
  }
}
export default AdressInputModule;
