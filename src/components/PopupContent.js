import React from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

const PopupContent = props => {
  const { marker } = props;
  return (
    <div className="container">
      <div className="card border-0">
        <div className="card-body">
          <div>
            <h5 className="card-title">{marker.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Address</h6>
          </div>
          <br />
          <div className="infoRow row">
            <div className="stationStatus col-6">
              <img className="popupImg img-fluid" src={bicycle} alt="Bicycles" /> = {marker.available_bikes}
            </div>
            <div className="stationStatus col-6">
              <img className="popupImg img-fluid" src={parking} alt="Parking" /> = {marker.available_bike_stands}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-3">
              <p>Il y a 5 min.</p>
            </div>
            <div className="col-3">
              <a href="#" target="blank"><i className="fas fa-sync-alt fa-2x"></i></a>
            </div>
            <div className="col-3">
              <a href="#" target="blank"><i className="far fa-star fa-2x"></i></a>
            </div>
            <div className="col-3">
              <a className="btn btn-primary" href="#" role="button">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupContent;
