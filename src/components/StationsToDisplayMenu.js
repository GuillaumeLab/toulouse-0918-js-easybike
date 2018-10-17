import React, { Component } from 'react';

class StationToDisplayMenu extends Component {
  render() {
    return (
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => this.props.displayWhat('all')}>Toutes les stations</a>
          <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => this.props.displayWhat('bikes')}>Uniquement les stations avec des vélos disponibles</a>
          <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => this.props.displayWhat('freeSpaces')}>Uniquement les stations avec des emplacements disponibles</a>
        </div>
      </div>
    );
  }
}
export default StationToDisplayMenu;
