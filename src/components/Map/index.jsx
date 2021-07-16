import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const { google, query } = props;

  useEffect(() => {
    if (query) {
      return searchByQuery(query);
    }
  }, [query]);

  function searchByQuery(query) {
    console.log(query);
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "10000",
      type: ["restaurant"],
      query,
    };

    return service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("Restaurantes >>>>", results);
      }
    });
  }

  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "10000",
      type: ["restaurant"],
    };

    return service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
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
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt_BR",
})(MapContainer);
