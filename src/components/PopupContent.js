import React, { Component } from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';

const getItinararyUrl = (userPosition, marker) => `https://www.google.com/maps/dir/?api=1&origin=${userPosition}&destination=${marker.position.lat},${marker.position.lng}`;


class PopupContent extends Component {
  render() {
    const { marker, refreshStationsList, userPosition } = this.props;
    return (
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <div>
              <h5 className="card-title">{marker.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{marker.address}</h6>
            </div>
            <br />
            <div className="infoRow row">
              <div className="col-6">
                <div className="infoCol d-flex justify-content-center">
                  <button
                    type="button"
                    className="infoColBtn btn btn-outline-dark"
                  >
                    <img
                      className="popupImg img-fluid"
                      src={bicycle}
                      alt="Bicycles"
                    />
                    <span className="badge badge-dark">
                      {marker.available_bikes}
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="infoCol d-flex justify-content-center">
                  <button
                    type="button"
                    className="infoColBtn btn btn-outline-dark"
                  >
                    <img
                      className="popupImg img-fluid"
                      src={parking}
                      alt="Parking"
                    />
                    <span className="badge badge-dark">{marker.available_bike_stands}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className="PopupFooter row">
              <div className="refreshText col-3 d-flex align-items-center">
                <p>Il y a 5 min.</p>
              </div>
              <div className="col-3 d-flex align-items-center">
                <button
                  type="button"
                  href="#"
                  target="blank"
                  className="btn"
                  onClick={refreshStationsList}
                >
                  <i className="fas fa-sync-alt fa-2x" />
                </button>
              </div>
              <div className="col-3 d-flex align-items-center">
                <a
                  href="#"
                  target="blank"
                >
                  <i className="far fa-star fa-2x" />
                </a>
              </div>
              <div className="Go col-3 d-flex align-items-center">
                <a
                  className="btn btn-primary"
                  href={getItinararyUrl(userPosition, marker)}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Go
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupContent;
