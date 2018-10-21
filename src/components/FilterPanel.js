import React, { Component } from 'react';

class FilterPanel extends Component {
  render() {
    const { selectedOption, handleRadioChange } = this.props;

    return (
    <div className="filter-panel">
      <form className="px-2">
        <div className="stations-to-display">
          <input
            name="stations"
            id="all-bikes"
            type="radio"
            value="all"
            checked={selectedOption === 'all'}
            onChange={handleRadioChange}
            aria-label="Display all stations"
          />
          <label htmlFor="all-bikes">Toutes les stations</label>
        </div>
        <div className="stations-to-display">
          <input
            name="stations"
            id="only-bikes"
            type="radio"
            value="bikes"
            checked={selectedOption === 'bikes'}
            onChange={handleRadioChange}
            aria-label="Display stations with bikes"
          />
          <label htmlFor="only-bikes">Seulement les stations avec vélos</label>
        </div>
        <div className="stations-to-display">
          <input
            name="stations"
            id="only-free-spaces"
            type="radio"
            value="freeSpaces"
            checked={selectedOption === 'freeSpaces'}
            onChange={handleRadioChange}
            aria-label="Display stations with free bikes stands"
          />
          <label htmlFor="only-free-spaces">Seulement les stations avec emplacements disponibles</label>
        </div>
      </form>
    </div>
);
  }
}


export default FilterPanel;
