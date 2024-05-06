import axios from "axios";

const PeopleService = () => {
  const api = "https://swapi.dev/api/people/";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  let number = 1;
  const getStarWarsPeople = async () => {
    try {
      const resposta = await axios.get(`${api}/?page=${number}`);
      const novaResponse = {
        ...resposta,
        data: {
          ...resposta?.data,
          results: resposta?.data?.results.map((item) => ({
            ...item,
            imagem: `${apiImage}/characters/${item.url
              .replace("https://swapi.dev/api/people/", "")
              .replace("/", "")}.jpg`,
          })),
        },
      };

      return novaResponse;
    } catch (err) {
      console.error(err);
    }
  };

  return { getStarWarsPeople };
};

export default PeopleService;
