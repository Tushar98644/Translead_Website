import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12.9715987, lng: 77.5945627 },
        zoom: 14,
      });
    });
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default Map;
