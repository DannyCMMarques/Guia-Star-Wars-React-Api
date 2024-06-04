import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards2";
import { Container, Row } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import StarshipsService from "./../../service/starships/StarshipsService";
import Loading from "../../components/loading";
import Seo from './../../tools/Seo'

const Starships = () => {
  const { getStarships } = StarshipsService();
  const { getStarWarsId } = MovieService();

  const [naves, setNaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStarshipsStarWars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getStarships(page);
        setNaves(response.data.results);
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
      <Seo title="Naves"/>
      <Row>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {naves.map((nave) => (
              <CardsModal
                key={nave.url}
                imagem={nave.imagem}
                titulo={nave.name}
                mgp={nave.MGLT}
                capacidade={nave.cargo_capacity}
                creditos={nave.cost_in_credits}
                tripulacao={nave.crew}
                hiperpropulsor={nave.hyperdrive_rating}
                comprimento={nave.length}
                fabricante={nave.manufacturer}
                modelo={nave.model}
                passageiros={nave.passengers}
                classificacao={nave.starship_class}
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
