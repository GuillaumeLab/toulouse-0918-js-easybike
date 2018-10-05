import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MapContainer from './components/Map.js'


import './App.css';
import './Navbar.css';
import './Map.css';
import './SideMenu.css';

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
      <div className='App container-fluid'>
        <Navbar/>   
        <div className="row">
          <SideMenu/> 
          <MapContainer/>
        </div>           
      </div>
    );
  }
}

export default App;
