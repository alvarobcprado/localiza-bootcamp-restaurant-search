import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container, Search } from "./styles";
import TextField, { Input } from "@material/react-text-field";

const Home = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo Site" />
        <TextField
          label="Pesquisar"
          outlined
          //helperText={<HelperText>Help Me!</HelperText>}
          //onTrailingIconSelect={() => this.setState({value: ''})}
          //trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        >
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
