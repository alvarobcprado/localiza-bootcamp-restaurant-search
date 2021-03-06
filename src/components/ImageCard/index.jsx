import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Skeleton from "../Skeleton";

const Card = styled.div`
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 16px;
  margin: 16px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  text-shadow: 1px 1px #000000;
`;

const ImageCard = ({ photo, title, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="100px" height="100px" />
      )}
    </>
  );
};

export default ImageCard;
