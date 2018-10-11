import React from 'react';

const AltNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
  <a className="navbar-brand" href="#">EasyBike</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Prendre un vélo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Déposer un vélo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Calcul d'itinéraire</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Favoris</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filtrer
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Par vélos disponibles</a>
          <a className="dropdown-item" href="#">Par emplacements disponibles</a>          
        </div>
      </li>
    </ul>
  </div>
</nav>
);
export default AltNavbar;
