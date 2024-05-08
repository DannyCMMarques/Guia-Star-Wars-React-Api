import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import Modal2 from "../../components/Modal2";

const Personagem = () => {
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();
  const [personagens, setPersonagens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPersonagemStarwars = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getStarWarsPeople();
      setPersonagens(
        response.data.results.map((personagem) => ({
          ...personagem,
          filmes: [],
        }))
      );

      if (response) {
        response.data.results.forEach(async (personagemFilme) => {
          const filmesDetalhes = await Promise.all(
            personagemFilme.films.map(async (filmeUrl) => {
              try {
                const response = await getStarWarsId(filmeUrl);

                return response.data;
              } catch (err) {
                console.log("Error fetching Star Wars data:", err);
                return null;
              }
            })
          );

          setPersonagens((prevPersonagens) =>
            prevPersonagens.map((personagem) => {
              if (personagem.url === personagemFilme.url) {
                return { ...personagem, filmes: filmesDetalhes };
              }
              return personagem;
            })
          );
        });
      }
    } catch (err) {
      console.log("Error fetching Star Wars data:", err);
    }
    setIsLoading(false);
  }, [getStarWarsPeople, getStarWarsId]);

  useEffect(() => {
    getPersonagemStarwars();
  }, []);

console.log(personagens)
  return (
    <Container>
      <Row>
        <Modal2 />
        {isLoading ? (
          <div>
            <Spinner
              animation="border"
              variant="danger"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "200px",
                margin: "auto",
                marginTop: "auto",
                // height:"100vh",
                // width:"100vw"
              }}
            />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {personagens.map((personagem) => (
              <CardsModal
              key={personagem.url}
              imagem={personagem.imagem}
              titulo={personagem.name}
            />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};
export default Personagem;
