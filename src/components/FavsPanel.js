import React, { Component } from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

class FavsPanel extends Component {
  render() {
    const { favStations } = this.props;
    const regexp = /\d+ - /;

    return (
      <ul className="favs-panel favs">
        <h3>FAVORIS</h3>
        {favStations.map(station => (
          <li className="favs-container" key={station.number}>
            <div>
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
            </div>
            <hr />
          </li>
        ))}
      </ul>
    );
  }
}

export default FavsPanel;
