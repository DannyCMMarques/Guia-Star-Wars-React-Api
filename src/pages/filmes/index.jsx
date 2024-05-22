import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import PeopleService from "../../service/People/PeopleService";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import Modal2 from "../../components/Modal2";
import PlanetService from "./../../service/Planet/PlanetsService";
import SpeciesService from "./../../service/Species/SpeciesService";
import StarshipsService from "./../../service/starships/StarshipsService";
import VehiclesService from "./../../service/Vehicles/VehicleService";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import { Col } from "react-bootstrap";
import styles from "./index.module.css";
const Filme = () => {
  const { getStarWars } = MovieService();
  const [apiResponse, setApiResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filmes, setFilmes] = useState([]);

  const { getPlanetsId } = PlanetService();
  const { getSpeciesId } = SpeciesService();
  const { getStarshipsId } = StarshipsService();
  const { getVehiclesId } = VehiclesService();

  const getListStarwars = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await getStarWars();
      const filmsModificado = await Promise.all(
        response.data.results.map(async (film) => {
          const planetasDetalhes = await Promise.all(
            film.planets.map(async (planetUrl) => {
              try {
                const response = await getPlanetsId(planetUrl);
                return response.data;
              } catch (err) {
                console.log("Error fetching Star Wars data:", err);
                return null;
              }
            })
          );

          const especiesDetalhes = await Promise.all(
            film.species.map(async (speciesUrl) => {
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
            film.starships.map(async (starshipUrl) => {
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
            film.vehicles.map(async (vehicleUrl) => {
              try {
                const response = await getVehiclesId(vehicleUrl);
                return response.data;
              } catch (err) {
                console.log("Error fetching Star Wars data:", err);
                return null;
              }
            })
          );

          return {
            ...film,
            planetas: planetasDetalhes,
            especies: especiesDetalhes,
            naves: navesDetalhes,
            veiculos: veiculosDetalhes,
          };
        })
      );

      setFilmes(filmsModificado);
    } catch (error) {
      console.log("Error fetching Star Wars data:", error);
    }
    setIsLoading(false);
  }, [getStarWars, getPlanetsId, getSpeciesId, getVehiclesId]);

  useEffect(() => {
    getListStarwars();
  }, []);
  return (
    <Container>
      <Row>
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
            {filmes.map((film) => (
              <CardsModal
                key={film.episode_id}
                imagem={film.imagem}
                titulo={film.title}
                diretor={film.director}
                dataLanc={film.release_date}
                planetas={
                  <div className={styles.lista}>
                    {film.planetas.map((planet, index) => (
                      <span key={planet.url}>
                        {planet.name}
                        {index !== film.planetas.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                }
                especies={
                  <ul className={styles.lista}>
                    {film.especies.map((especie, index) => (
                      <span key={especie.url}>
                        {especie.name}
                        {index !== film.planetas.length - 1 && ", "}
                      </span>
                    ))}
                  </ul>
                }
                naves={
                  <ul className={styles.lista}>
                    {film.naves.map((naves, index) => (
                      <span key={naves.url}>
                        {naves.name}
                        {index !== film.planetas.length - 1 && ", "}
                      </span>
                    ))}
                  </ul>
                }
                veiculos={
                  <ul className={styles.lista}>
                    {film.veiculos.map((veiculos, index) => (
                      <span key={veiculos.url}>
                        {veiculos.name}
                        {index !== film.planetas.length - 1 && ", "}
                      </span>
                    ))}
                  </ul>
                }
              />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Filme;
