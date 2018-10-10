import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import axios from 'axios';
<<<<<<< Updated upstream

import { apiKey } from './settings';
import ModalWarning from './ModalWarning';

import { iconStation } from './icon';

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
    this.setState({error: null});
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

    const leafletMarkers = stationsList.map(marker => (
      <Marker
        icon={iconStation}
        position={[marker.position.lat, marker.position.lng]}
        key={`marker_${marker.name}`}
      >
        <Popup>
          <span>{marker.name}</span>
        </Popup>
      </Marker>
    ));

    const displayMarkers = error ? (
      <ModalWarning
        error={error}
        clearError={this.clearError}
        refresh={this.refreshStationsList}
      />)
      : leafletMarkers;

    return (
      <div>
        {displayMarkers}
      </div>
    );
  }
}

export default MarkersLayer;
