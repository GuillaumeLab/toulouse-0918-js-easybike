import React, { Component } from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

class Favorites extends Component {
  render() {
    const { favStations, userPosition } = this.props;
    const regexp = /\d+ - /;
    const getItineraryUrl = (stations) => (
      `https://www.google.com/maps/dir/?api=1
       &origin=${userPosition}
       &destination=${stations.position.lat},${stations.position.lng}
       &travelmode=walking`
    );

    return (
      <div className="card text-text-secondary favs">
        <div className="card-header font-weight-bold ">
          FAVORIS
        </div>
        <div className="card-body">
          <ul className="card-text">
            {favStations.map(station => (
              <li key={station.number}>
                <h4>{station.name.replace(regexp, '')}</h4>
                <div className="statInfo">
                  <span>
                    <img className="img-fluid" src={bicycle} alt="Bicycles" />
                  </span>
                  <span>
                    {station.available_bikes}
                  </span>
                  <span>
                    <img className="img-fluid" src={parking} alt="Parking" />
                  </span>
                  <span>
                    {station.available_bike_stands}
                  </span>
                  <div>
                    <a
                      className="btn btn-primary go-button align-content-center"
                      href={getItineraryUrl(station)}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                    >
                      Go
                    </a>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}


export default Favorites;
