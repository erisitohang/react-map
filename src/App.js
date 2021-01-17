import { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
import Pins from './components/Pins';
import Slider from './components/Slider';
import 'mapbox-gl/dist/mapbox-gl.css';

const { REACT_APP_API_URI, REACT_APP_MAPGL_TOKEN } = process.env;
function App() {
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
  const [count, setCount] = useState(10);
  const [fetching, setFetching] = useState(false);
  const END_POINT = `${REACT_APP_API_URI}/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`;

  useEffect(() => {
    setFetching(true);
    fetch(END_POINT)
      .then((resp) => resp.json())
      .then((json) => {
        setFetching(false);
        setData(json);
      })
      .catch((error) => {
        setFetching(false);
        console.log('error');
      });
  }, [END_POINT, count]);

  return (
    <div style={{ height: '100vh' }}>
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={REACT_APP_MAPGL_TOKEN}
      >
        <Pins
          data={data}
          count={count}
          latitude={latitude}
          longitude={longitude}
        />
      </MapGL>
      <Slider
        disable={fetching}
        count={count}
        onChange={(value) => setCount(value)}
      />
    </div>
  );
}

export default App;
