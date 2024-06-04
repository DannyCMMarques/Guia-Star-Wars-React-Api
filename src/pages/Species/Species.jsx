import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards2";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import SpeciesService from "../../service/Species/SpeciesService";
import Loading from "../../components/loading";
import Seo from './../../tools/Seo'

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
          response.data.results)
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
      <Seo
        title="Especies"
      />
      <Row>
        {isLoading ? (
          <div>
            <Loading
            />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {especies.map((especie) => (
              <CardsModal
                key={especie.url}
                imagem={especie.imagem}
                titulo={especie.name}
                alturaMedia={especie.average_height}
                     expectativaVida={especie.average_lifespan}
                      classificacao2={especie.classification}
                       denominacao={especie.designation}
                        coresOlhos={especie.eye_colors}
                        coresCabelos={especie.hair_colors}
                        linguagem={especie.language}
                          coresPele={especie.skin_colors}
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
