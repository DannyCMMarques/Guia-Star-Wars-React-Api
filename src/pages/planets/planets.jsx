import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import Modal2 from "../../components/Modal2";
import styles from "./styles.module.css";
import { Link } from "react-bootstrap-icons";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import PlanetsService from "../../service/Planet/PlanetsService";

const Planets = () => {
  const { getPlanets } = PlanetsService();
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();

  const [planetas, setPlanetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlanetasStarwars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getPlanets(page);
        setPlanetas(
          response.data.results.map((planetas) => ({
            ...planetas,
            filmes: [],
          }))
        );
        if (response) {
          response.data.results.forEach(async (planetaFilme) => {
            const filmesDetalhes = await Promise.all(
              planetaFilme.films.map(async (filmeUrl) => {
                try {
                  const response = await getStarWarsId(filmeUrl);

                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            setPlanetas((prevPlanetas) =>
              prevPlanetas.map((planetas) => {
                if (planetas.url === planetaFilme.url) {
                  return { ...planetas, filmes: filmesDetalhes };
                }
                return planetas;
              })
            );
          });
        }
      } catch (err) {
        console.log("Error fetching Star Wars data:", err);
      }
      setIsLoading(false);
    },
    [getPlanets, getStarWarsId]
  );

  useEffect(() => {
    getPlanetasStarwars(1);
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
              }}
            />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {planetas.map((planetas) => (
              <CardsModal
                key={planetas.url}
                imagem={planetas.imagem}
                titulo={planetas.name}
              />
            ))}
          </div>
        )}
      </Row>
      <PaginacaoPersonagem onPageChange={getPlanetasStarwars} totalPages={6} />
    </Container>
  );
};
export default Planets;
