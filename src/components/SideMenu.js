import React from 'react';
import Favorites from "./Favorites";
import NavigationModule from "./NavigationModule";

const SideMenu = () => (
  <div id="SideMenu" className="col-md-3 pt-2">   
    <NavigationModule />
    <Favorites />
  </div>
);

export default SideMenu;
