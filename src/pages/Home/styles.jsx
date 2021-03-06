import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 24px;
    margin-left: 24px;
  }
  margin-bottom: 16px;
`;

export const CaroulselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const DetailTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 19px;
  margin-bottom: 16px;
`;

export const DetailText = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  line-height: 9px;
  margin: 6px 0px;
`;
