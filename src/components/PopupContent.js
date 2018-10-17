import React from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

const PopupContent = props => {
  const { marker } = props;
  return (
    <div className="container p-0">
      <div className="card border-0">
        <div className="card-body p-0">
          <div>
            <h5 className="card-title">{marker.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{marker.address}</h6>
          </div>
          <br />
          <div className="infoRow row">
            <div className="col-6">
              <div className="infoCol d-flex justify-content-center">
                <button type="button" className="infoColBtn btn btn-outline-dark">
                  <img className="popupImg img-fluid" src={bicycle} alt="Bicycles" /><span className="badgeCounter badge badge-dark">{marker.available_bikes}</span>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="infoCol d-flex justify-content-center">
                <button type="button" className="infoColBtn btn btn-outline-dark">
                  <img className="popupImg img-fluid" src={parking} alt="Parking" /><span className="badgeCounter badge badge-dark">{marker.available_bike_stands}</span>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="PopupFooter row m-0">
            <div className="refreshText col-3 d-flex align-items-center">
              <p className="m-0">Il y a 5 min.</p>
            </div>
            <div className="col-3 d-flex align-items-center">
              <a href="#" target="blank"><i className="fas fa-sync-alt fa-2x"></i></a>
            </div>
            <div className="col-3 d-flex align-items-center">
              <a href="#" target="blank"><i className="far fa-star fa-2x"></i></a>
            </div>
            <div className="go col-3 d-flex align-items-center">
              <a className="btn btn-primary" href="#" role="button">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupContent;
