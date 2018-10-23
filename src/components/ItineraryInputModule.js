import React, { Component, Fragment } from 'react';

const getItinararyUrl = (str1, str2) => {
  console.log(str1, str2);
  const generateUrl = (`https://www.google.com/maps/dir/?api=1&origin=${str1}+toulouse&destination=${str2}+toulouse&travelmode=bicycling`);
  return generateUrl;
};

class ItineraryInputModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      destination: ''
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeDestination = this.handleChangeDestination.bind(this);
  }

  handleChangeStart(event) {
    console.log(event.target.value);
    this.setState({ start: event.target.value });
  }

  handleChangeDestination(event) {
    console.log(event.target.value);
    this.setState({ destination: event.target.value });
  }

  render() {
    const { start, destination } = this.state;
    if (!this.props.itinerary) {
      return null;
    }
    return (
      <Fragment>
        <input onChange={this.handleChangeStart} type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="itinerary start" placeholder="Départ" />
        <input onChange={this.handleChangeDestination} type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="itinerary end" placeholder="Arrivée" />
        <br />
        <a className="btn btn-primary" href={getItinararyUrl(start, destination)} target="_blank" rel="noopener noreferrer" role="button">Calcul d&apos;itinéraire</a>
      </Fragment>
    );
  }
}
export default ItineraryInputModule;
