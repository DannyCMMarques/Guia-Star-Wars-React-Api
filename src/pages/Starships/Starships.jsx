import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import Modal2 from "../../components/Modal2";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import PlanetsService from "../../service/Planet/PlanetsService";
import StarshipsService from "./../../service/starships/StarshipsService";
import styles from "./styles.module.css";

const Starships = () => {
  const { getStarships } = StarshipsService();
  const { getPlanets } = PlanetsService();
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();

  const [naves, setNaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStarshipsStarWars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getStarships(page);
        setNaves(
          response.data.results.map((naves) => ({
            ...naves,
            filmes: [],
          }))
        );
        console.log(page);
        if (response) {
          response.data.results.forEach(async (navesFilme) => {
            const filmesDetalhes = await Promise.all(
              navesFilme.films.map(async (filmeUrl) => {
                try {
                  const response = await getStarWarsId(filmeUrl);

                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            setNaves((prevNaves) =>
              prevNaves.map((naves) => {
                if (naves.url === navesFilme.url) {
                  return { ...naves, filmes: filmesDetalhes };
                }
                return naves;
              })
            );
          });
        }
      } catch (err) {
        console.log("Error fetching Star Wars data:", err);
      }
      setIsLoading(false);
    },
    [getStarships, getStarWarsId]
  );

  useEffect(() => {
    getStarshipsStarWars(1);
  }, []);
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
            {naves.map((naves) => (
              <CardsModal
                key={naves.url}
                imagem={naves.imagem}
                titulo={naves.name}
              />
            ))}
          </div>
        )}
      </Row>
      <PaginacaoPersonagem onPageChange={getStarshipsStarWars} totalPages={4} />
    </Container>
  );
};
export default Starships;
