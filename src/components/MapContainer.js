import React from 'react';
import MapLeaflet from './MapLeaflet';

const MapContainer = (props) => (
  <div id="mapContainer" className="container-fluid col-12 col-md-9">
    <MapLeaflet stationsToDisplay={this.props.stationsToDisplay} />
  </div>
);

export default MapContainer;
