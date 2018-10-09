import React, { Component } from 'react';

class RequestWarning extends Component {
  render() {
    const { error } = this.props;
    if (!error) {
      return null;
    }

    return (
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>Nous avons rencontré une erreur lors de la récupération des données</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestWarning;
