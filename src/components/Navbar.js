import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const displayWhat = this.props.displayWhat;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="col-2">
          <a className="navbar-brand" href="index.html"><h1>EasyBike</h1></a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavAltMarkup" className="col-md-8 collapse navbar-collapse">
          <div className="navbar-nav text-right text-md-center mx-auto">
            <button type="button" className="nav-item nav-link" onClick={() => this.props.displayWhat('bikes')}>Prendre un vélo</button>
            <button type="button" className="nav-item nav-link" onClick={() => this.props.displayWhat('freeSpaces')}>Déposer un vélo</button>
            <a className="nav-item nav-link" href="#">Calcul d&apos;itinéraire</a>
            <a className="nav-item nav-link" href="#">Filtrer</a>
            <a className="nav-item nav-link" href="#">Favoris</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;