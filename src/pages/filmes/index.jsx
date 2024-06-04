import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards2";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import PlanetService from "./../../service/Planet/PlanetsService";
import SpeciesService from "./../../service/Species/SpeciesService";
import StarshipsService from "./../../service/starships/StarshipsService";
import VehiclesService from "./../../service/Vehicles/VehicleService";
import Loading from "../../components/loading";
import Seo from './../../tools/Seo'
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
        <Seo title="Filmes"/>
      <Row>
        {isLoading ? (
          <div>
            <Loading />
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
                planetas={ film.planetas.slice(0, 3).map((planet, index, array) => (
                  <span style={{ color: "white" }} key={index}>
                    {planet.name}
                    {index !== array.length - 1 ? ", " : (film.planetas.length > 5 ? "..." : ".")}
                  </span>
                ))}
                especies={ film.especies.slice(0, 4).map((especie, index, array) => (
                  <span style={{ color: "white" }} key={index}>
                    {especie.name}
                    {index !== array.length - 1 ? ", " : (film.especies.length > 15 ? "..." : ".")}
                  </span>
                ))}
                naves={film.naves.slice(0, 3).map((nave, index, array) => (
                  <span style={{ color: "white" }} key={index}>
                    {nave.name}
                    {index !== array.length - 1 ? ", " : (film.naves.length > 6 ? "..." : ".")}
                  </span>
                ))}
                veiculos={film.veiculos.slice(0, 3).map((veiculo, index, array) => (
                  <span style={{ color: "white" }} key={index}>
                    {veiculo.name}
                    {index !== array.length - 1 ? ", " : (film.veiculos.length > 7 ? "..." : ".")}
                  </span>
                ))}
              />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Filme;
