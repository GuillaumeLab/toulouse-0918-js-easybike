import React from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

const PopupContent = props => {
  const { marker, refreshStationsList } = props;
  const regexp = /\d+ - /;
  const name = marker.name.replace(regexp, '');
  return (
    <div className="container">
      <div className="card border-0">
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{marker.address}</h6>
          </div>
          <br />
          <div className="infoRow row justify-content-around">
            <div className="infoCol text-center">
              <img className="popupImg img-fluid" src={bicycle} alt="Bicycles" />
              <div className="bikes-infos my-2">{marker.available_bikes}</div>
            </div>
            <div className="infoCol text-center">
              <img className="popupImg img-fluid" src={parking} alt="Parking" />
              <div className="bikes-infos my-2">{marker.available_bike_stands}</div>
            </div>
          </div>
          <br />
          <div className="PopupFooter row justify-content-around">
            <div>
              <button type="button" className="btn" onClick={refreshStationsList}><i className="fas fa-sync-alt fa-2x img-fluid" /></button>
            </div>
            <div>
              <button type="button" className="btn"><i className="far fa-star fa-2x img-fluid" /></button>
            </div>
            <div>
              <button type="button" className="btn btn-primary">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupContent;
