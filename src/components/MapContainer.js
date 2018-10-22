import React, { Component } from 'react';
import MapLeaflet from './MapLeaflet';

class MapContainer extends Component {
  render() {
    const { stationsToDisplay, displayFeature, minStandsToDisplay, minBikesToDisplay, selectedOption } = this.props;
    return (
      <div id="mapContainer" className="container-fluid col-12 col-md-9">
        <MapLeaflet
          stationsToDisplay={stationsToDisplay}
          displayFeature={displayFeature}
          minStandsToDisplay={minStandsToDisplay}
          minBikesToDisplay={minBikesToDisplay}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}
export default MapContainer;
