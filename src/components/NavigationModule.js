import React from 'react';

const NavigationModule = () => {

  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     itinary : false
  //   };
  // }

  // displayItinary = (event) => {
  //   this.setState ({
  //     itinary : true
  //   });
  // };

  function check () {
    let check = document.getElementsByTagName('input');
    if (check.type === 'checkbox') {
      check.checked = true;
    }
  }

  function uncheck () {
    let uncheck = document.getElementsByTagName('input');
    if (uncheck.type === 'checkbox') {
      uncheck.checked = false;
    }
  }

  return (
    <div className="card m-2">
      <div className="card-header font-weight-bold">
        NAVIGATION
      </div>
      <div className="card-body">
        <div className="btn-group-toggle" data-toggle="buttons">
        <input type="checkbox"></input><span> Rechercher un itinéraire</span>
        </div>
      </div>
    </div>
  );
};


export default NavigationModule;