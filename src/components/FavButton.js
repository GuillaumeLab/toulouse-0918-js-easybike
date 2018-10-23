import React from 'react';

const FavButton = ({ displayFeature }) => (
  <button
    type="button"
    className="map-button fav display-button"
    onClick={() => displayFeature('favs')}
  />
);

export default FavButton;
