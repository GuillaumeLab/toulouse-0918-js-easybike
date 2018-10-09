import React from 'react';

const PopupContent = props => {
  const {marker}=props
  return (
      <div>
        <h5>{marker.name}</h5>
        <div className="row">          
          <div className="col-6">{marker.available_bikes}</div>
          <div className="col-6">{marker.available_bike_stands}</div>
        </div>
      </div>
  )
}

export default PopupContent;