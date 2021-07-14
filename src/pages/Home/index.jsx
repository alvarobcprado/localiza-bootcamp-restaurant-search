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
} from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Slider from "react-slick";
import { Card } from "../../components";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          <Slider {...settings}>
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
