import React, { Component } from 'react';

class ModalWarning extends Component {
  render() {
    const { apiDataError, clearError, refresh } = this.props;
    if (!apiDataError) {
      return null;
    }

    return (
      <div className="modal show modal-warning" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>Nous avons rencontré une erreur lors de la récupération des données</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearError}>Close</button>
              <button type="button" className="btn btn-primary" onClick={refresh}>Recharger les stations</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWarning;
