import React, { Component } from 'react';

const getItinararyUrl = (str1, str2) => {
  console.log(str1, str2);
  const generateUrl = (`https://www.google.com/maps/dir/?api=1&origin=${str1}+toulouse&destination=${str2}toulouse&travelmode=bicycling`);
  return generateUrl;
};

class Navbar extends Component {
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
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="col-2">
          <a className="navbar-brand" href="index.html"><h1>EasyBike</h1></a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarNavAltMarkup" className="col-md-8 collapse navbar-collapse">
          <div className="navbar-nav text-right text-md-center mx-auto">
            <a className="nav-item nav-link" href="#">Prendre un vélo</a>
            <a className="nav-item nav-link" href="#">Déposer un vélo</a>
            <a className="nav-item nav-link" href={getItinararyUrl(start, destination)} target="_blank" rel="noopener noreferrer">Calcul d&apos;itinéraire</a>
            <a className="nav-item nav-link" href="#">Filtrer</a>
            <a className="nav-item nav-link" href="#">Favoris</a>
          </div>
          {/*FORMULAIRE TEST*/}
          <div className="form-group">
            <label htmlFor="inputStart">Départ</label>
            <input onChange={this.handleChangeStart} id="inputStart" type="text" className="form-control" />
            <label htmlFor="inputDestination">Arrivée</label>
            <input onChange={this.handleChangeDestination} id="inputDestination" type="text" className="form-control" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
