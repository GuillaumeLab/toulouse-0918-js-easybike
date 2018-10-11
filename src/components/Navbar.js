import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="col-2">
      <a className="navbar-brand" href="index.html"><h1>EasyBike</h1></a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavAltMarkup" className="col-md-8 collapse navbar-collapse">
      <div className="navbar-nav text-right text-md-center mx-auto">
        <a className="nav-item nav-link" href="#">Prendre un vélo</a>
        <a className="nav-item nav-link" href="#">Déposer un vélo</a>
        <a className="nav-item nav-link" href="#">Calcul d'intinéraire</a>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        <a className="nav-item nav-link" href="#">Filtrer</a>
        <a className="nav-item nav-link" href="#">Favoris</a>
      </div>
    </div>
  </nav>
);
export default Navbar;
