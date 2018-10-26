import React, { Component } from 'react';

const getItineraryUrl = (userPosition, str2) => {
  console.log(str2);
  return `https://www.google.com/maps/dir/?api=1&origin=${userPosition}&destination=${str2}+toulouse&travelmode=walking`;
};

class AddressInputModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: ''
    };
    this.handleChangeDestination = this.handleChangeDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDestination(event) {
    console.log(event.target.value);
    this.setState({ destination: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { destination } = this.state;
    const { itinerary, userPosition } = this.props;
    if (itinerary) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChangeDestination}
          type="text"
          className="form-control"
          id="Adresse"
          aria-describedby="itinerary end"
          placeholder="Adresse"
        />
        <br />
        <a
          className="btn btn-primary"
          href={getItineraryUrl(userPosition, destination)}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          Calcul d&apos;itinéraire
        </a>
      </form>
    );
  }
}
export default AddressInputModule;