import React, { Component } from 'react';
import MapLeaflet from './MapLeaflet';

class MapContainer extends Component {
  render() {
    const displayWhat = this.props.displayWhat;
    return (
      <div id="mapContainer" className="container-fluid col-12 col-md-9">
        <MapLeaflet stationsToDisplay={this.props.stationsToDisplay} displayWhat={displayWhat} />
      </div>
    );
  }
}

export default MapContainer;
