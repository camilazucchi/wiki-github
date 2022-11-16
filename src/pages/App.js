import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

export default function App() {

  const [repos, setRepos] = useState([]);


  

  return (
    <Container>
      <IconContext.Provider value={{ color: "#fdfffc", size: "5rem" }}>
        <DiGithubBadge />
        <Input />
        <ItemRepo />
      </IconContext.Provider>
    </Container>
  );
}
