import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import {
  Card,
  Restaurant,
  Modal,
  Map,
  Loader,
  Skeleton,
} from "../../components";
import {
  Container,
  Logo,
  Search,
  Wrapper,
  CaroulselTitle,
  Carousel,
} from "./styles";

import { useSelector } from "react-redux";

const Home = () => {
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );
  const [inputText, setInputText] = useState("");
  const [openedModal, setOpenedModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputText);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setOpenedModal(true);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    autoPlaySpeed: 500,
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
          {restaurants.length > 0 ? (
            <Carousel {...settings}>
              {restaurants.map((restaurant) => (
                <Card
                  key={restaurant.place_id}
                  photo={
                    restaurant.photos
                      ? restaurant.photos[0].getUrl()
                      : restaurante
                  }
                  title={restaurant.name}
                />
              ))}
              <Card
                key={11}
                photo={restaurante}
                title="Nome1"
                onClick={(e) => handleOpenModal("ksas")}
              />
              <Card key={12} photo={restaurante} title="Nome2" />
              <Card key={13} photo={restaurante} title="Nome3" />
              <Card key={14} photo={restaurante} title="Nome4" />
              <Card key={15} photo={restaurante} title="Nome5" />
              <Card key={16} photo={restaurante} title="Nome6" />
              <Card key={17} photo={restaurante} title="Nome7" />
              <Card key={18} photo={restaurante} title="Nome8" />
              <Card key={19} photo={restaurante} title="Nome9" />
            </Carousel>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={openedModal} onClose={() => setOpenedModal(false)}>
        {restaurantSelected ? (
          <>
            <p>{restaurantSelected?.name}</p>
            <p>{restaurantSelected?.formatted_address}</p>
            <p>{restaurantSelected?.formatted_phone_number}</p>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />

            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
