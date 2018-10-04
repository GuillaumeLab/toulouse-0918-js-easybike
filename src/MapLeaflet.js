import React from "react";

class MapLeaflet extends Component {
    // create an array with marker components

    render() {
        const LeafletMarkers = markers.map(marker => (
            <Marker position={marker.latlng} key={`marker_${marker.name}`}>
                <Popup>
                    <span>{marker.name}</span>
                </Popup>
            </Marker>
        ));

        <div className="map">
            <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
                <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                {LeafletMarkers}
            </Map>
        </div>
    }
}

export default MapLeaflet;