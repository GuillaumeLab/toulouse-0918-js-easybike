import React, { Component } from 'react';

class StationToDisplayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'all'
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
    this.props.displayWhat(event.target.value);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <div className="card">
          <div className="card-header font-weight-bold">Affichage des stations</div>
          <div className="card-body">
            <div className="card-text">
              <form>
                <div className="form-check ">
                  <div className="form-group stations-to-display">
                    <input name="stations" id="all-bikes" type="radio" value="all" checked={selectedOption === 'all'} onChange={this.handleRadioChange} aria-label="Display all stations" />
                    <label htmlFor="all-bikes">Toutes les stations</label>
                  </div>
                  <div className="form-group stations-to-display">
                    <input name="stations" id="only-bikes" type="radio" value="bikes" checked={selectedOption === 'bikes'} onChange={this.handleRadioChange} aria-label="Display stations with bikes" />
                    <label htmlFor="only-bikes">Seulement les stations avec vélos</label>
                  </div>
                  <div className="form-group stations-to-display">
                    <input name="stations" id="only-free-spaces" type="radio" value="freeSpaces" checked={selectedOption === 'freeSpaces'} onChange={this.handleRadioChange} aria-label="Display stations with free bikes stands" />
                    <label htmlFor="only-free-spaces">Seulement les stations avec emplacements disponibles</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StationToDisplayMenu;
