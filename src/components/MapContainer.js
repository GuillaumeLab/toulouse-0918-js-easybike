import React, { Component } from 'react';
import MapLeaflet from './MapLeaflet';

class MapContainer extends Component {
  render() {
    const { stationsToDisplay } = this.props;
    return (
      <div id="mapContainer" className="col-12 col-md-9 px-2">
        <MapLeaflet stationsToDisplay={stationsToDisplay} />
      </div>
    );
  }
}

export default MapContainer;
