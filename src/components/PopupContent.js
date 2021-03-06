import React, { Component } from 'react';
import bicycle from '../images/bicycle.png';
import parking from '../images/parking-sign.png';
import star from '../images/star.png';
import starFill from '../images/star-fill.png';
import refresh from '../images/refresh.png';


class PopupContent extends Component {
  constructor(props) {
    super(props);

    const { favStationsId, marker } = this.props;
    const isFavorite = favStationsId.includes(marker.number);

    this.state = {
      isFavorite
    };

    this.handleFavIcon = this.handleFavIcon.bind(this);
  }

  handleFavIcon() {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite
    });
  }

  render() {
    const {
      marker,
      refreshStationsList,
      handleFavList,
      userPosition,
    } = this.props;

    const { isFavorite } = this.state;
    const regexp = /\d+ - /;
    const name = marker.name.replace(regexp, '');
    const urlRequest = `https://www.google.com/maps/dir/?api=1&origin=${userPosition}&destination=${marker.position.lat},${marker.position.lng}&travelmode=walking`;
    return (
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <div>
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{marker.address}</h6>
            </div>
            <hr />
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
            <hr />
            <div className="PopupFooter row justify-content-around">
              <div>
                <button type="button" className="btn no-bg" onClick={refreshStationsList}>
                  <img src={refresh} alt="refresh" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn no-bg"
                  onClick={() => {
                    handleFavList(marker.number);
                    this.handleFavIcon();
                    refreshStationsList();
                  }}
                >
                  <img src={isFavorite ? starFill : star} alt="star" />
                </button>
              </div>
              <div>
                <a
                  className="go-button align-content-center"
                  href={urlRequest}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <button type="button" className="btn btn-primary">
                    Go
                  </button>
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
