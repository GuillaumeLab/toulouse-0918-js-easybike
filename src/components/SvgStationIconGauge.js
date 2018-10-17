import React, { Component } from 'react';

class SvgStationIconGauge extends Component {
  render() {
    const perc = this.props.perc || 0;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 120" className="icon-station">
        <title>Station marker</title>
        <desc>Marker with gauge to display availability in bike stations</desc>
        
        <polygon points="2 2 48 2 48 80 25 118 2 80" stroke='#007BFF' strokeWidth="6" fill='#007BFF' />
        <clipPath id="fill-icon">
          <polygon points="6 6 44 6 44 80 25 110 6 80 " strokeWidth="1" />
        </clipPath>
        <g clipPath="url(#fill-icon)">
          <rect width="100%" height={perc} fill="white" />
        </g>
      </svg>
    );
  }
}

export default SvgStationIconGauge;