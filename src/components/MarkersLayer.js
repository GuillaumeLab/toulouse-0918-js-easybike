import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const stations = require('./../static-data-JCDBikes');

const stationsList = stations.map((station) => {
    return {
        "name": station.name,
        "latlng": [station.latitude, station.longitude]
    }
})


const MarkersLayer = () => {
    const LeafletMarkers = stationsList.map(marker =>
        <Marker position={marker.latlng} key={`marker_${marker.name}`}>
            <Popup>
                <span>{marker.name}</span>
            </Popup>
        </Marker>
    );
    return (
        <div>
            {LeafletMarkers}
        </div>
    );
}

export default MarkersLayer  