import React, { Component } from 'react';


class NavigationModule extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isChecked : false
    };
  }

  selectNavigation = () => {
    this.setState ({
      isChecked : !this.state.isChecked
    });
  };
 
  render () {

    return (
      
      <div className="container">

        <div className="card my-2">
          
          <div className="card-header font-weight-bold">NAVIGATION</div>       
          
          <div className="card-body p-2">
            <div className="card-text">
              <div className="form-check mb-2">      
                <input type ="checkbox" className= "form-check-input" id = "itinary"
                onChange={this.selectNavigation} checked={this.state.isChecked}/><span> Rechercher un trajet</span>
              </div>
              <form>
                <div class="form-group">   
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default NavigationModule;