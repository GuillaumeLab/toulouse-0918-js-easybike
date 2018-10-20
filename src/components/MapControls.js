import React, { Component, Fragment } from 'react';
import Control from 'react-leaflet-control';
import './map.css';
import GeolocButton from './GeolocButton';


class MapControls extends Component {
  componentDidMount() {
    this.timerID = setTimeout(
      this.forceUpdate(),
      200
    );
  }

  render() {
    const { getCurrentPosition } = this.props;
    return (
      <Fragment>
        <Control position="topright">
          <GeolocButton
            getCurrentPosition={getCurrentPosition}
          />
          <button
            type="button"
            className="map-button search display-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          />
          <button
            type="button"
            className="map-button fav display-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          />
        </Control>
        <Control position="bottomright">
          <button
            type="button"
            className="map-button filter display-button"
            onClick={() => this.setState({ bounds: [51.3, 0.7] })}
          />
        </Control>
      </Fragment>
    );
  }
}

export default MapControls;
