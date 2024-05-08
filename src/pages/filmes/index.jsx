import { useCallback, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import CardsModal from "../../components/cards/cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieService from "../../service/MovieService/MovieService";
import { useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";

const Filme = () => {
  // const { apiResponse, isLoading } = ApiAssistent();

  const teste = [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "esse é o resumo 1",
    },
    {
      title: "The Empire Strikes Back",
      episode_id: 5,
      opening_crawl: "esse e o resumo 2",
    },
    {
      title: "Return of the Jedi",
      episode_id: 6,
      opening_crawl: "ele voltou",
    },
  ];
  const { getStarWars } = MovieService();
  const [apiResponse, setApiResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const location = useLocation();

  const getListStarwars = useCallback(async () => {
    setIsLoading(true);
    // const currentPath = location.pathname.replace("/", "");
    // console.log(currentPath);

    try {
      const response = await getStarWars();
      setApiResponse(response.data.results);
    } catch (error) {
      console.log("Error fetching Star Wars data:", error);
    }

    setIsLoading(false);
  }, [getStarWars]);

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
                // height:"100vh",
                // width:"100vw"
              }}
            />
          </div>
        ) : (
          <div style={{ display: "contents" }}>
            {apiResponse.map((film) => (
              //

              <CardsModal
                key={film.episode_id}
                imagem={film.imagem}
                titulo={film.title}
                tipo={film.title}
                titulo1="Diretores"
                texto1={film.director}
                titulo2="Data de Lançamento"
                texto2={film.release_date}
                titulo3="Produtores"
                texto3={film.producer}
                titulo4="Sinopse"
                texto4={film.opening_crawl}
                grupo="filme"
              />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Filme;
