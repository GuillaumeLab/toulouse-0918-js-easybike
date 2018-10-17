import React from 'react';

const StationToDisplayMenu = () => (
  <div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavAltMarkup" className="col-md-8 collapse navbar-collapse">
      <div className="navbar-nav text-right text-md-center mx-auto">
        <a className="nav-item nav-link" href="#">Afficher toutes les stations</a>
        <a className="nav-item nav-link" href="#">les stations avec des vélos disponibles</a>
        <a className="nav-item nav-link" href="#">les stations avec des emplacements libres</a>
      </div>
    </div>
  </div>
);
export default StationToDisplayMenu;
