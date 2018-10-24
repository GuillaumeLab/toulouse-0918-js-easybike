import React, { Component } from 'react';
import MapLeaflet from './MapLeaflet';

class MapContainer extends Component {
  render() {
    const { stationsToDisplay, displayFeature,favStationsId,updateStationsList } = this.props;
    return (
      <div id="mapContainer" className="container-fluid col-12 col-md-9">
        <MapLeaflet
          stationsToDisplay={stationsToDisplay}
          displayFeature={displayFeature}
          favStationsId={favStationsId}
          updateStationsList={updateStationsList}
        />
      </div>
    );
  }
}
export default MapContainer;
