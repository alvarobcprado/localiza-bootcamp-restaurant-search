import React, { useState } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const { google } = props;

  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "30000",
    };

    return service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesService.OK) {
        console.log("Restaurantes >>>>", results);
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearBy(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation={true}
      onReady={onMapReady}
      onRecenter={onMapReady}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt_BR",
})(MapContainer);
