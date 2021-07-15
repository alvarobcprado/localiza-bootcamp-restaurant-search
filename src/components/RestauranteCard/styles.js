import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px;
  margin-top: 10px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  line-height: 29px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  line-height: 19px;
  font-family: ${(props) => props.theme.fonts.regular};
  margin-bottom: 10px;
`;
