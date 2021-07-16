import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import { Card, Restaurant, Modal, Map } from "../../components";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  CaroulselTitle,
  Carousel,
} from "./styles";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [openedModal, setOpenedModal] = useState(false);
  const [query, setQuery] = useState(null);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputText);
    }
  }

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
              onKeyPress={(e) => handleKeyPress(e)}
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
      <Map query={query} />
      <Modal open={openedModal} onClose={() => setOpenedModal(false)} />
    </Wrapper>
  );
};

export default Home;
