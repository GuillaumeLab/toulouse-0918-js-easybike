import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MarkersLayer from './MarkersLayer'
import './App.css';

const mapConfig = {
  center: [43.6036786, 1.4328012],
  zoom: 14
};


// const data = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       id: "01",
//       properties: { name: "Alabama", density: 94.65 },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [43.6044292, 1.4416234]
//           ]
//         ]
//       }
//     }
//   ]
// }

class App extends Component {
  getStyle(feature) {
    return {
        fillColor: '#ece7f2',
        weight: 2,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
        fillOpacity: 0.7
    }
  }
  
  render() {
    return (
      <div className="App">
        <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <MarkersLayer />
        </Map>
      </div>
    );
  }
}

export default App;
