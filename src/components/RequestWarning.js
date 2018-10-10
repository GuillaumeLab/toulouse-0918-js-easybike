import React, { Component } from 'react';

class RequestWarning extends Component {
  render() {
    const { error } = this.props;
    if (!error) {
      return null;
    }

    return (
      <div className="modal show modal-warning" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p>Nous avons rencontré une erreur lors de la récupération des données</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestWarning;
