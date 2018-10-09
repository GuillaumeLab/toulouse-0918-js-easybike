import React, { Component } from "react";

import { Map, TileLayer } from 'react-leaflet';
import MarkersLayer from './MarkersLayer'

const mapConfig = {
    center: [43.6036786, 1.4328012],
    zoom: 15
};


class MapLeaflet extends Component {

    render() {
        return (
            <div className="map ">
                <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
                    <TileLayer
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                    />
                    <MarkersLayer />
                </Map>
            </div>
        )
    }
}

export default MapLeaflet;