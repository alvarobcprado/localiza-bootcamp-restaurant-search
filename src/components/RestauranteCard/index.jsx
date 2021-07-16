import React from "react";

import {
  Restaurant,
  RestaurantInfo,
  RestaurantPhoto,
  Title,
  Address,
} from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurante from "../../assets/restaurante-fake.png";

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars
        value={restaurant.rating}
        count={5}
        isHalf
        activeColor="#FFD700"
        edit={false}
      />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
    />
  </Restaurant>
);

export default RestaurantCard;
