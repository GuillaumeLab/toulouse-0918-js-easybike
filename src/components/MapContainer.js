import React, { Component } from 'react';
import MapLeaflet from './MapLeaflet';

class MapContainer extends Component {
  render() {
    return (
      <div id="mapContainer" className="container-fluid px-2 col-12 col-md-9">
        <MapLeaflet stationsToDisplay={this.props.stationsToDisplay} />
      </div>
    );
  }
}

export default MapContainer;
