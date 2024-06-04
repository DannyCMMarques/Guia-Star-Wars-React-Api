import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards2";
import { Container, Row } from "react-bootstrap";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import PlanetsService from "../../service/Planet/PlanetsService";
import Loading from "../../components/loading";
import Seo from './../../tools/Seo'

const Planets = () => {
  const { getPlanets } = PlanetsService();

  const [planetas, setPlanetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlanetasStarwars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getPlanets(page);
        setPlanetas(response.data.results);
      } catch (err) {
        console.log("Error fetching Star Wars data:", err);
      }
      setIsLoading(false);
    },
    [getPlanets]
  );

  useEffect(() => {
    getPlanetasStarwars(1);
  }, []);

  return (
    <Container>
      <Seo title="Planets" description="Planetas" />
      <Row>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {planetas.map((planeta) => (
              <CardsModal
                key={planeta.url}
                imagem={planeta.imagem}
                titulo={planeta.name}
                clima={planeta.climate}
                diametro={planeta.diameter}
                gravidade={planeta.gravity}
                periodo={planeta.orbital_period}
                populacao={planeta.population}
                terreno={planeta.terrain}
                rotacao={planeta.rotation_period}
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
