import React from 'react';
import mapButtonStyles from './mapButtonStyles';

const FavButton = ({ displayFeature }) => (
  <button
    type="button"
    style={mapButtonStyles}
    className="map-button fav display-button"
    onClick={() => displayFeature('favs')}
  />
);

export default FavButton;
