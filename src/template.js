import React, { useEffect, useRef } from 'react';
import * as ee from '@google/earthengine';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the Leaflet map
    const map = L.map(mapRef.current).setView([37.7749, -122.4194], 8);

    // Add a base layer to the map (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Authenticate with Earth Engine (make sure you handle auth correctly)
    ee.initialize().then(() => {
      // Load greenhouse gas data
      const greenhouseGasData = ee.ImageCollection('MODIS/MYD04_L2')
        .filterDate('2023-01-01', '2023-12-31')
        .select('AOT_550');

      // Create a visualization parameters object
      const visualizationParams = {
        min: 0,
        max: 1000,
        palette: ['blue', 'green', 'yellow', 'orange', 'red'],
      };

      // Get the tile layer URL from Earth Engine
      greenhouseGasData.getMap(visualizationParams, (mapLayer) => {
        L.tileLayer(mapLayer.urlTemplate).addTo(map);
      });
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '800px' }} />;
}

export default MapComponent;
