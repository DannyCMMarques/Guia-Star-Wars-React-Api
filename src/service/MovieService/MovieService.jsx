import axios from "axios";

const MovieService = () => {
  const api = "https://swapi.dev/api/films";
  const apiImage = "https://starwars-visualguide.com/assets/img";

  const getStarWars = async () => {
    try {
      const resposta = await axios.get(`${api}`);
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
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getStarWarsId = async (id) => {
    try {
      const resposta = await axios.get(`${id}`);
      resposta.data.imagem = `${apiImage}/films/${id
        .replace("https://swapi.dev/api/films/", "")
        .replace("/", "")}.jpg`;
      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getStarWars, getStarWarsId };
};

export default MovieService;
