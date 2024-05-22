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
import styles from "./styles.module.css";
const Vehicles = () => {
  const { getVehicles } = VehiclesService();
  const [veiculos, setVeiculos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getStarWarsId } = MovieService();

  const GetVehiclesStarWars = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await getVehicles(page);
        setVeiculos(
          response.data.results.map((veiculos) => ({
            ...veiculos,
            filmes: [],
          }))
        );

        if (response) {
          response.data.results.forEach(async (veiculosFilme) => {
            const filmesDetalhes = await Promise.all(
              veiculosFilme.films.map(async (filmeUrl) => {
                try {
                  const response = await getStarWarsId(filmeUrl);

                  return response.data;
                } catch (err) {
                  console.log("Error fetching Star Wars data:", err);
                  return null;
                }
              })
            );

            setVeiculos((prevVeiculos) =>
              prevVeiculos.map((veiculos) => {
                if (veiculos.url === veiculosFilme.url) {
                  return { ...veiculos, filmes: filmesDetalhes };
                }
                return veiculos;
              })
            );
          });
        }
      } catch (err) {
        console.log("Error fetching Star Wars data:", err);
      }
      setIsLoading(false);
    },
    [getVehicles, getStarWarsId]
  );

  useEffect(() => {
    GetVehiclesStarWars(1);
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
            {veiculos.map((veiculos) => (
              <CardsModal
                key={veiculos.url}
                imagem={veiculos.imagem}
                titulo={veiculos.name}
              />
            ))}
          </div>
        )}
      </Row>
      <PaginacaoPersonagem onPageChange={GetVehiclesStarWars} totalPages={4} />
    </Container>
  );
};

export default Vehicles;
