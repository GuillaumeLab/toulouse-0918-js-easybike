import React, { Component, Fragment } from 'react';
import Control from 'react-leaflet-control';
import './map.css';


class MapControls extends Component {
  componentDidMount() {
    this.timerID = setTimeout(
      this.forceUpdate(),
      200
    );
  }

  render() {
    const { lat, lng } = this.props;
    return (
      <Fragment>
        <Control position="topright">
          <button
            type="button"
            className="map-button"
            onClick={() => {this.props.centerMap(lat, lng);}
          >
            Geoloc
          </button>
          <button
            type="button"
            className="map-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          >
            Search
          </button>
          <button
            type="button"
            className="map-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          >
            Fav
          </button>
        </Control>
        <Control position="bottomright">
          <button
            type="button"
            className="map-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          >
            filter
          </button>
        </Control>
      </Fragment>
    );
  }
}

export default MapControls;
