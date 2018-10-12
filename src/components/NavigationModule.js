import React, { Component } from 'react';

class NavigationModule extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isChecked : false
    };
  }

  updateCheck = () => {
    this.setState ({
      isChecked : !this.state.isChecked
    });
  };
 
  render () {
    return (
      <div className="card m-2">
        <div className="card-header font-weight-bold">
          NAVIGATION
        </div>
        <div className="card-body">
          <div className="form-check">      
            <input type = "checkbox" className = "form-check-input" id = "itinary"
            onChange={this.updateCheck} checked={this.state.isChecked}/>
            <span> Rechercher un trajet</span>
          </div>
        </div>
      </div>
    );
  }
};


export default NavigationModule;