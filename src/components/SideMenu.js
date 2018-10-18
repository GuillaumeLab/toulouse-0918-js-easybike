import React, { Component } from 'react';
import Favorites from './Favorites';
import NavigationModule from './NavigationModule';
import StationsToDisplayMenu from './StationsToDisplayMenu';

import '../SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <div id="SideMenu" className="col-md-3 pt-2">
        <StationsToDisplayMenu displayWhat={this.props.displayWhat} />
        <NavigationModule />
        <Favorites />
      </div>
    );
  }
}

export default SideMenu;
