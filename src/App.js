import { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
import Pins from './components/Pins';
import 'mapbox-gl/dist/mapbox-gl.css';

const { REACT_APP_API_URI, REACT_APP_MAPGL_TOKEN } = process.env;
function App() {
  const maxDrivers = 50;
  const latitude = 51.5049375;
  const longitude = -0.0964509;
  const mapOptions = {
    width: '100%',
    height: 900,
    latitude,
    longitude,
    zoom: 14,
  };
  const [viewport, setViewport] = useState(mapOptions);
  const [data, setData] = useState({ pickup_eta: 0, drivers: [] });
  const END_POINT = `${REACT_APP_API_URI}/drivers?latitude=${latitude}&longitude=${longitude}&count=${maxDrivers}`;

  useEffect(() => {
    fetch(END_POINT)
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, [END_POINT]);

  return (
    <div style={{ height: '100vh' }}>
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={REACT_APP_MAPGL_TOKEN}
      >
        <Pins data={data} />
      </MapGL>
    </div>
  );
}

export default App;
