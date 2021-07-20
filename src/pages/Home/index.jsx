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

import { useSelector, useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/modules/restaurants";

const Home = () => {
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );
  const dispatch = useDispatch();
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
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
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
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </TextField>
          <CaroulselTitle>Na sua Área</CaroulselTitle>
          {restaurants.length > 0 ? (
            <>
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
              </Carousel>

              {restaurants.map((restaurant) => (
                <Restaurant
                  key={restaurant.place_id}
                  restaurant={restaurant}
                  onClick={() => handleOpenModal(restaurant.place_id)}
                />
              ))}
            </>
          ) : (
            <Loader />
          )}
        </Search>
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal
        open={openedModal}
        onClose={() => {
          dispatch(setRestaurant(null));
          setOpenedModal(false);
        }}
      >
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
