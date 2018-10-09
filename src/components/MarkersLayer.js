import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { apiKey } from './settings';
import PopupContent from './PopupContent';

// const stations = require('./../static-data-JCDBikes');

// const stationsStaticList = stations.map((station) => ({
//   name: station.name,
//   latlng: [station.latitude, station.longitude]
// }));


class MarkersLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationsList: [],
      isLoading: false,
      error: null
    };
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

  render() {
    const { stationsList, error } = this.state;

    const leafletMarkers = stationsList.map(stationData => (
      <Marker position={[stationData.position.lat, stationData.position.lng]} key={`marker_${stationData.name}`}>
        <Popup>
          <PopupContent marker={stationData} />
        </Popup>
      </Marker>
    ));

    return (

      <div>
        {leafletMarkers}
      </div>
    );
  }
}

export default MarkersLayer;
