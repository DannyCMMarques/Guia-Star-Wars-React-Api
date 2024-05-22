import axios from "axios";

const VehiclesService = () => {
  const api = "https://swapi.dev/api/vehicles/";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  const getVehicles = async (page) => {
    try {
      const resposta = await axios.get(`${api}/?page=${page}`);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/vehicles/${item.url
              .replace("https://swapi.dev/api/vehicles/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };
      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  const getVehiclesId = async (id) => {
    try {
      const resposta = await axios.get(`${id}`);
      resposta.data.imagem = `${apiImage}/vehicles/${id
        .replace("https://swapi.dev/api/vehicles/", "")
        .replace("/", "")}.jpg`;
      return resposta;
    } catch (err) {
      console.error(err);
    }
  };

  return { getVehicles, getVehiclesId };
};

export default VehiclesService;
