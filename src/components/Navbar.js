import React, { Component } from 'react';

const getItineraryUrl = (userPosition, closestStation) => {
  return `https://www.google.com/maps/dir/?api=1&origin=${userPosition}&destination=${closestStation}`;
};

class Navbar extends Component {
  render() {
    const { getClosestStationPosition, userPosition } = this.props;
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="index.html"><h1>EasyBike</h1></a>
        <div className="mx-auto">
          <a
            className="nav-item btn vite-button"
            href={getItineraryUrl(userPosition, getClosestStationPosition("bikes"))}
            target="_blank"
          >
            Vite
            <br />
            un vélo&nbsp;!
          </a>
          <a
            className="nav-item btn vite-button"
            href={getItineraryUrl(userPosition, getClosestStationPosition("freeSpaces"))}
            target="_blank"
          >
            Vite
            <br />
            une place&nbsp;!
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
