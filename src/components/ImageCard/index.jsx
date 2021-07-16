import React from "react";

import styled from "styled-components";

const Card = styled.div`
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 5px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard = ({ photo, title, onClick }) => (
  <Card photo={photo} onClick={onClick}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
