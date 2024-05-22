import axios from "axios";

const StarshipsService = () => {
  const api = "https://swapi.dev/api/starships";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  const getStarships = async (page) => {
    try {
      const resposta = await axios.get(`${api}/?page=${page}`);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/starships/${item.url
              .replace("https://swapi.dev/api/starships/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getStarshipsId = async (id) => {
    try {
      const resposta = await axios.get(`${id}`);
      resposta.data.imagem = `${apiImage}/starships/${id
        .replace("https://swapi.dev/api/starships/", "")
        .replace("/", "")}.jpg`;
      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getStarships, getStarshipsId };
};

export default StarshipsService;
