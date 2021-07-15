import React from "react";

import { Restaurant, RestaurantInfo, Title, Address } from "./styles";
import ReactStars from "react-rating-stars-component";

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars
        value={4.5}
        count={5}
        isHalf
        activeColor="#FFD700"
        edit={false}
      />
      <Address>Endereço</Address>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
