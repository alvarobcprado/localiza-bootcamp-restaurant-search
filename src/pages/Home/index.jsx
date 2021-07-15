import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  Map,
  CaroulselTitle,
  Carousel,
} from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";
import { Card, Restaurant } from "../../components";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo Site" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            //helperText={<HelperText>Help Me!</HelperText>}
            //onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </TextField>
          <CaroulselTitle>Na sua Área</CaroulselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome1" />
            <Card photo={restaurante} title="Nome2" />
            <Card photo={restaurante} title="Nome3" />
            <Card photo={restaurante} title="Nome4" />
            <Card photo={restaurante} title="Nome5" />
            <Card photo={restaurante} title="Nome5" />
          </Carousel>
        </Search>
        <Restaurant />
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
