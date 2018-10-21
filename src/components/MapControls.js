import React, { Component, Fragment } from 'react';
import Control from 'react-leaflet-control';

import GeolocButton from './GeolocButton';
import FilterButton from './FilterButton';
import RefreshButton from './RefreshButton';
import FavButton from './FavButton';
import SearchButton from './SearchButton';

import './map.css';

class MapControls extends Component {
  componentDidMount() {
    this.timerID = setTimeout(
      this.forceUpdate(),
      200
    );
  }

  render() {
    const { getCurrentPosition, refreshStationsList, displayFeature } = this.props;
    return (
      <Fragment>
        <Control position="topright">
          <GeolocButton
            getCurrentPosition={getCurrentPosition}
          />
          <SearchButton
            displayFeature={displayFeature}
          />
          <FavButton />
        </Control>
        <Control position="bottomright">
          <FilterButton />
        </Control>
        <Control position="bottomleft">
          <RefreshButton
            refreshStationsList={refreshStationsList}
          />
        </Control>
      </Fragment>
    );
  }
}

export default MapControls;
