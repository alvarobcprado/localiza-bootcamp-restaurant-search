import React, { useState } from "react";

import {
  Restaurant,
  RestaurantInfo,
  RestaurantPhoto,
  Title,
  Address,
} from "./styles";
import { Skeleton } from "../index";
import ReactStars from "react-rating-stars-component";
import restaurante from "../../assets/restaurante-fake.png";

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
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
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt="Foto do restaurante selecionado"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
