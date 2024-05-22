import axios from "axios";

const PlanetsService = () => {
  const api = "https://swapi.dev/api/planets/";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  const getPlanets = async (page) => {
    try {
      const resposta = await axios.get(`${api}/?page=${page}`);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/planets/${item.url
              .replace("https://swapi.dev/api/planets/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getPlanetsId = async (id) => {
    try {
      const resposta = await axios.get(`${id}`);
      resposta.data.imagem = `${apiImage}/planets/${id
        .replace("https://swapi.dev/api/planets/", "")
        .replace("/", "")}.jpg`;
      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getPlanets, getPlanetsId };
};

export default PlanetsService;
