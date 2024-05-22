import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Modal2 from "../../components/Modal2";
import styles from "./Personagem.module.css";
import { Link } from "react-bootstrap-icons";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import SpeciesService from "../../service/Species/SpeciesService";
import StarshipsService from "../../service/starships/StarshipsService";
import MovieService from "../../service/MovieService/MovieService";
import VehiclesService from "../../service/Vehicles/VehicleService";
import PlanetService from "./../../service/Planet/PlanetsService";
const Personagem = () => {
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();
  const [personagens, setPersonagens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getPlanetsId } = PlanetService();
  const { getSpeciesId } = SpeciesService();
  const { getStarshipsId } = StarshipsService();
  const { getVehiclesId } = VehiclesService();
  const getPersonagemStarwars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getStarWarsPeople(page);
        const personagemModificado = await Promise.all(
          response.data.results.map(async (personagem) => {
            const planetasDetalhes = await (async () => {
              try {
                const response = await getPlanetsId(personagem.homeworld);
                return response.data;
              } catch (err) {
                console.log("Erro ao buscar dados de Star Wars:", err);
                return null;
              }
            })();
            const especiesDetalhes = await Promise.all(
              personagem.species.map(async (speciesUrl) => {
                try {
                  const response = await getSpeciesId(speciesUrl);
                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            const navesDetalhes = await Promise.all(
              personagem.starships.map(async (starshipUrl) => {
                try {
                  const response = await getStarshipsId(starshipUrl);
                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            const veiculosDetalhes = await Promise.all(
              personagem.vehicles.map(async (vehicleUrl) => {
                try {
                  const response = await getVehiclesId(vehicleUrl);
                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );
            const filmesDetalhes = await Promise.all(
              personagem.films.map(async (filmesUrl) => {
                try {
                  const response = await getStarWarsId(filmesUrl);
                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            return {
              ...personagem,
              planetas: planetasDetalhes,
              especies: especiesDetalhes,
              naves: navesDetalhes,
              veiculos: veiculosDetalhes,
              filmes: filmesDetalhes,
            };
          })
        );

        setPersonagens(personagemModificado);
      } catch (error) {
        console.log("Error fetching Star Wars data:", error);
      }
      setIsLoading(false);
    },
    [getStarWarsPeople, getPlanetsId, getSpeciesId, getVehiclesId]
  );

  useEffect(() => {
    getPersonagemStarwars(1);
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
            {personagens.map((personagem) => (
              <CardsModal
                key={personagem.url}
                imagem={personagem.imagem}
                titulo={personagem.name}
                ano={personagem.birth_year}
                peso={personagem.mass + "" + " Kg"}
                altura={personagem.height / 100 + "" + " Metros"}
                imagemFilme={personagem.filmes.map((film, index) => (
                  <a href="/films" key={index}>
                    <img
                      src={film.imagem}
                      alt={film.titulo}
                      className={styles.tamanhoImagem}
                    />
                  </a>
                ))}
                naves={personagem.naves.map((nave, index) => (
                  <a href="/starships" key={index}>
                    <img
                      src={nave.imagem}
                      alt={nave.name}
                      className={styles.tamanhoImagem}
                    />
                  </a>
                ))}
                planeta={personagem.planetas.name}
                especie={
                  personagem.especies.length === 0
                    ? "Humano"
                    : personagem.especies.map((especie) => (
                        <ul key={especie.name}>
                          <li>{especie.name}</li>
                        </ul>
                      ))
                }
                veiculos={personagem.veiculos.map((veiculo, index) => (
                  <a href="/starships" key={index}>
                    <img
                      src={veiculo.imagem}
                      alt={veiculo.name}
                      className={styles.tamanhoImagem}
                    />
                  </a>
                ))}
              />
            ))}
          </div>
        )}
      </Row>
      <PaginacaoPersonagem
        onPageChange={getPersonagemStarwars}
        totalPages={10}
      />
    </Container>
  );
};
export default Personagem;
