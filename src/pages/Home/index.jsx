import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container, Logo, Search, Wrapper, Map } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const Home = () => {
  const [inputText, setInputText] = useState("");
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
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
