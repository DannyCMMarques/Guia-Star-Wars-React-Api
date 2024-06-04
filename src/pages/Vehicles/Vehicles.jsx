import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards2";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import VehiclesService from "./../../service/Vehicles/VehicleService";
import PaginacaoPersonagem from "../../components/paginação/paginacao";
import Loading from "../../components/loading";
import Seo from "./../../tools/Seo";

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
        setVeiculos(response.data.results);
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
      <Seo title=" Veículos" />
      <Row>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {veiculos.map((veiculo) => (
              <CardsModal
                key={veiculo.url}
                imagem={veiculo.imagem}
                titulo={veiculo.name}
                capacidade={veiculo.cargo_capacity}
                creditos={veiculo.cost_in_credits}
                comprimento={veiculo.length}
                fabricante={
                  <span
                    style={{
                      fontSize: veiculo.manufacturer.length >= 27 ? 12 : 14,
                    }}
                  >
                    {veiculo.manufacturer}
                  </span>
                }
                velocidade={veiculo.max_atmosphering_speed}
                modelo={veiculo.model}
                passageiros={veiculo.passengers + " " + "passageiro"}
                classe={veiculo.vehicle_class}
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
