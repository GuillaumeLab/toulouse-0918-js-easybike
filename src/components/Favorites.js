import React, { Component } from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

class Favorites extends Component {
  render() {
    const { favStations } = this.props;
    const regexp = /\d+ - /;
    return (
      <div className="card text-text-secondary my-2 favs">
        <div className="card-header font-weight-bold ">
          FAVORIS
        </div>
        <div className="card-body">
          <ul className="card-text font-weight-normal">
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
