import axios from "axios";

const MovieService = () => {
  const api = "https://swapi.dev/api/films";
  const apiImage = "https://starwars-visualguide.com/assets/img";

  const getStarWars = async () => {
    console.log();
    try {
      const resposta = await axios.get(`${api}`);
      console.log(resposta);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/films/${item.url
              .replace("https://swapi.dev/api/films/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };
      console.log(novaResponse);
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getStarWarsId = async (id) => {
    console.log();
    try {
      const resposta = await axios.get(`${id}`);
      console.log(resposta.data.results);
      console.log(resposta);
      console.log(resposta.data);
      resposta.data.imagem = `${apiImage}/films/${id
        .replace("https://swapi.dev/api/films/", "")
        .replace("/", "")}.jpg`;
      console.log(resposta.data.imagem);
      //resposta e resposta.data sao objetos logo nao conseguirei aplicar o metodo map
      //

      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getStarWars, getStarWarsId };
};

export default MovieService;
