import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { Draw, Modify } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

const MapComponent = () => {
  const location = useLocation();
  const { firstName } = location.state || { firstName: 'Guest' };

  useEffect(() => {
    const vectorSource = new VectorSource();

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    const draw = new Draw({
      source: vectorSource,
      type: 'Polygon',
    });
    map.addInteraction(draw);

    const modify = new Modify({ source: vectorSource });
    map.addInteraction(modify);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{firstName}</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default MapComponent;