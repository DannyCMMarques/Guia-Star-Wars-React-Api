import axios from "axios";

const SpeciesService = () => {
  const api = "https://swapi.dev/api/species/";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  const getSpecies = async (page) => {
    try {
      const resposta = await axios.get(`${api}/?page=${page}`);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/species/${item.url
              .replace("https://swapi.dev/api/species/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };  
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getSpeciesId = async (id) => {
    try {
      const resposta = await axios.get(`${id}`);
      resposta.data.imagem = `${apiImage}/species/${id
        .replace("https://swapi.dev/api/species/", "")
        .replace("/", "")}.jpg`;
      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getSpecies, getSpeciesId };
};

export default SpeciesService;
