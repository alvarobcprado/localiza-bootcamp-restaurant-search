import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";

const MapContainer = (props) => {
  const { restaurants } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  useEffect(() => {
    if (query) {
      return searchByQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (placeId) {
      return getRestaurantById(placeId);
    }
  }, [placeId]);

  function getRestaurantById(placeId) {
    console.log(query);
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request = {
      placeId,
      fields: [
        "name",
        "opening_hours",
        "formatted_address",
        "formatted_phone_number",
      ],
    };

    return service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("Restaurantes >>>>", place);
        dispatch(setRestaurant(place));
      }
    });
  }

  function searchByQuery(query) {
    console.log(query);
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: map.center,
      radius: "10000",
      type: ["restaurant"],
      query,
    };

    return service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("Restaurantes >>>>", results);
        dispatch(setRestaurants(results));
      }
    });
  }

  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: center,
      radius: "10000",
      type: ["restaurant"],
    };

    return service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
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
      {...props}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt_BR",
})(MapContainer);
