import React from 'react';

const Favorites = () => {

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
    <div className="card mx-2">
      <div className="card-header font-weight-bold">
        Navigation
      </div>
      <div className="card-body">
        <div className="btn-group-toggle" data-toggle="buttons">
        <input type="checkbox"></input><span> Rechercher un itinéraire</span>
        </div>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};


export default Favorites;