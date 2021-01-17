import * as React from 'react';
import { Marker } from 'react-map-gl';

function MarkerIcon(props) {
  const { latitude, longitude, icon, color } = props;

  return (
    <Marker longitude={longitude} latitude={latitude}>
      <svg
        width="32"
        height="32"
        style={{ fill: color }}
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} />
      </svg>
    </Marker>
  );
}

export default React.memo(MarkerIcon);
