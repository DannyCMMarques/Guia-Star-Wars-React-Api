import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import Modal2 from "../../components/Modal2";
import { Link } from "react-bootstrap-icons";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import PlanetsService from "../../service/Planet/PlanetsService";
import styles from "./styles.module.css";
import SpeciesService from "../../service/Species/SpeciesService";

const Species = () => {
  const { getSpecies } = SpeciesService();
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();

  const [especies, setEspecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpeciesStarWars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getSpecies(page);
        setEspecies(
          response.data.results.map((especies) => ({
            ...especies,
            filmes: [],
          }))
        );
        if (response) {
          response.data.results.forEach(async (especieFilme) => {
            const filmesDetalhes = await Promise.all(
              especieFilme.films.map(async (filmeUrl) => {
                try {
                  const response = await getStarWarsId(filmeUrl);

                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            setEspecies((prevEspecies) =>
              prevEspecies.map((especies) => {
                if (especies.url === especieFilme.url) {
                  return { ...especies, filmes: filmesDetalhes };
                }
                return especies;
              })
            );
          });
        }
      } catch (err) {
        console.log("Error fetching Star Wars data:", err);
      }
      setIsLoading(false);
    },
    [getSpecies, getStarWarsId]
  );

  useEffect(() => {
    getSpeciesStarWars(1);
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
            {especies.map((especies) => (
              <CardsModal
                key={especies.url}
                imagem={especies.imagem}
                titulo={especies.name}
              />
            ))}
          </div>
        )}
      </Row>
      <PaginacaoPersonagem onPageChange={getSpeciesStarWars} totalPages={4} />
    </Container>
  );
};
export default Species;
