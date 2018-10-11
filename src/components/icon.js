import L from 'leaflet';

const iconStation = L.Icon.extend({
  options: {
    iconUrl: require('../images/iconStation.svg'),
    iconRetinaUrl: require('../images/iconStation.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  }
});

export default iconStation;
