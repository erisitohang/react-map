import { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1IjoiZXJpc2NvZGUiLCJhIjoiY2trMDlxaDVrMGZkYTJvcnJyajFkanU1biJ9.Ge01K3NA4kGEO0JlPoF6_g";
function App() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 900,
    latitude: 51.5049375,
    longitude: -0.0964509,
    zoom: 14,
  });

  return (
    <div style={{ height: "100vh" }}>
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
      ></MapGL>
    </div>
  );
}

export default App;
