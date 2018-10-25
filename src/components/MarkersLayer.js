import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

import { Marker, Popup } from 'react-leaflet';
import SvgStationIconGauge from './SvgStationIconGauge';

import PopupContent from './PopupContent';
import ModalWarning from './ModalWarning';

class MarkersLayer extends Component {

  render() {
    const {
      stationsToDisplay,
      stationsList,
      error,
      refreshStationsList,
      userPosition
    } = this.props;
    
    const maxWidth = 400;
    const minWidth = 340;
    const allStationsMarkers = stationsList.filter(stationData => (stationData.available_bikes !== 0 && stationsToDisplay === "bikes") ||
      (stationData.available_bike_stands !== 0 && stationsToDisplay === 'freeSpaces')
      || stationsToDisplay === 'all')
      .map(stationData => (
      <Marker
          icon={L.divIcon({
            className: 'custom-icon',
            html: ReactDOMServer.renderToString(
              <SvgStationIconGauge
                perc={(stationData.available_bike_stands / stationData.bike_stands) * 110}
              />
            ),
            iconSize: [16, 45]
          })}
          position={[stationData.position.lat, stationData.position.lng]}
          key={`marker_${stationData.name}`}
        >
          <Popup maxWidth={maxWidth} minWidth={minWidth}>
            <PopupContent
              marker={stationData}
              refreshStationsList={refreshStationsList}
              userPosition={userPosition}
            />
          </Popup>
    </Marker>
      ));

    const displayMarkers = error ? (
      <ModalWarning
        error={error}
        clearError={this.clearError}
        refresh={this.refreshStationsList}
      />)
      : allStationsMarkers;

    return (
      <div>
        {displayMarkers}
      </div>
    );
  }
}

export default MarkersLayer;
