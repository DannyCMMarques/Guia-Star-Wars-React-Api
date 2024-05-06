import { useCallback, useEffect, useState } from "react";
import CardsModal from "../../components/cards/cards";
import { useLocation } from "react-router-dom";
import PeopleService from "../../service/People/PeopleService";
import { Container, Pagination, Row, Spinner } from "react-bootstrap";
import MovieService from "../../service/MovieService/MovieService";
import { FileMusic } from "react-bootstrap-icons";

const Personagem = () => {
  const { getStarWarsPeople } = PeopleService();
  const { getStarWarsId } = MovieService();
  const [personagem, setPersonagem] = useState([
    { teste: "teste1" },
    "teste2",
    "teste3",
  ]);
  const [filme, setFilme] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const location = useLocation();

  const getPersonagemStarwars = useCallback(async () => {
    setIsLoading(true);
    // const currentPath = location.pathname.replace("/", "");
    // console.log(currentPath);
    try {
      const response = await getStarWarsPeople();
      console.log(response);

      setPersonagem(response.data.results);
      if (response) {
        personagem.forEach(Personagemfilme => {
            Personagemfilme.films.forEach(filme => {
                console.log("Filme:", filme);
                getFilmsStarWars(filme)
            });
        });
    }
      console.log(personagem);
    } catch (err) {
      console.log("Error fetching Star Wars data:", err);
    }
    setIsLoading(false);
  }, [getStarWarsPeople]
);

  const getFilmsStarWars = useCallback(async (id) => {
    try {
      const response = await getStarWarsId(id);
      console.log("resposta", response);
      setFilme(response.data.results);
      console.log(filme);
    } catch (err) {
      {
        console.log("Error fetching Star Wars data:", err);
      }
    }
  }, [getStarWarsId]);
  

  useEffect(() => {
    getPersonagemStarwars();
    
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
            {personagem.map((item) => (
              //

              <CardsModal
                key={item.url}
                imagem={item.imagem}
                titulo={item.name}
                tipo={item.name}
                titulo1="Ano de Nascimento"
                texto1={item.birth_year}
                titulo2="Altura"
                texto2={item.height}
                titulo3="Genero"
                texto3={item.gender}
                titulo4="skin_color"
                texto4={item.skin_color}
                titulo5="Filmes que participou"
              />
            ))}
          </div>
        )}
      </Row>
    </Container>
  );
};
export default Personagem;
