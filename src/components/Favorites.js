import React from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

const Favorites = ({ favStations }) => {
  return (
    <div className="card text-text-secondary my-2">
      <div className="card-header font-weight-bold ">
        FAVORIS
      </div>
      <div className="card-body">
        <div className="card-text font-weight-normal">
          <ul>
            {favStations.map(station => (
              <li>
                <div>{station.address}</div>
                <div className="statInfo">
                  <span>
                    <img className="popupImg img-fluid" src={bicycle} alt="Bicycles" />
                  </span>
                  <span>
                    {station.available_bikes}
                  </span>
                  <span>
                    <img className="popupImg img-fluid" src={parking} alt="Parking" />
                  </span>
                  <span>
                    {station.available_bike_stands}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Favorites;
