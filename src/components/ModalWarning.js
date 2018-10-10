import React, { Component } from 'react';

class ModalWarning extends Component {
  render() {
    const { error, clearError, refresh } = this.props;
    if (!error) {
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
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.clearError}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.refresh} >Recharger les stations</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWarning;
