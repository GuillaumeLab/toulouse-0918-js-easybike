import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

import { Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import SvgStationIconGauge from './SvgStationIconGauge';

import { apiKey } from './settings';
import PopupContent from './PopupContent';
import ModalWarning from './ModalWarning';

class MarkersLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationsList: [],
      isLoading: false,
      error: null
    };
    this.clearError = this.clearError.bind(this);
    this.refreshStationsList = this.refreshStationsList.bind(this);
  }

  componentDidMount() {
    const request = `https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${apiKey}`;
    this.setState({ isLoading: true });

    axios.get(request)
      .then(result => this.setState({
        stationsList: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  clearError() {
    this.setState({ error: null });
  }

  refreshStationsList() {
    console.log('refresh');
    this.setState({ error: null });
    const request = `https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=${apiKey}`;
    this.setState({ isLoading: true });

    axios.get(request)
      .then(result => this.setState({
        stationsList: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { stationsList, error } = this.state;
    const { stationsToDisplay } = this.props;
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
              refreshStationsList={this.refreshStationsList}
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
