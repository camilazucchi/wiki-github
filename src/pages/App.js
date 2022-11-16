import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import { Container } from "./styles";
import Input from "../components/Input";

export default function App() {
  return (
    <Container>
      <IconContext.Provider value={{ color: "white", size: "5rem" }}>
        <DiGithubBadge />
        <Input />
      </IconContext.Provider>
    </Container>
  );
}
