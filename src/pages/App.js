import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { api } from "../services/api";

export default function App() {
  const [currentRepos, setCurrentRepos] = useState("");
  const [repos, setRepos] = useState([]);

  // função para buscar o repositório
  const handleSearchRepos = async () => {
    const { data } = await api.get(`repos/${currentRepos}`);

    if (data.id) {
      const isExist = repos.find((repos) => repos.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepos("");
        return;
      }
    }
    alert("Repositório não encontrado.");
  };

  const handleRemoveRepos = (reposId, id) => {
    if(reposId === id) {
      document.getElementById(`${id}`).innerHTML = ''
    }
  }

  return (
    <Container>
      <IconContext.Provider value={{ color: "#EEEEEE", size: "8rem" }}>
        <DiGithubBadge />
        <Input
          value={currentRepos}
          onChange={(e) => setCurrentRepos(e.target.value)}
        />
        <Button onClick={handleSearchRepos} />
        {repos.map((repos) => (
          <ItemRepo handleRemoveRepos={handleRemoveRepos} repos={repos} />
        ))}
      </IconContext.Provider>
    </Container>
  );
}
