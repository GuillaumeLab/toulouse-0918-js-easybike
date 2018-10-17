import React from 'react';
import Favorites from './Favorites';
import NavigationModule from './NavigationModule';
import StationsToDisplayMenu from './StationsToDisplayMenu';


const SideMenu = () => (
  <div id="SideMenu" className="col-md-3 pt-2">
    <StationsToDisplayMenu />
    <NavigationModule />
    <Favorites />
  </div>
);

export default SideMenu;
