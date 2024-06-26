import axios from "axios";

const PeopleService = () => {
  const api = "https://swapi.dev/api/people/";
  const apiImage = "https://starwars-visualguide.com/assets/img";
  const getStarWarsPeople = async (page) => {
    try {
      const resposta = await axios.get(`${api}?page=${page}`);
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
  const getPeopleId = async (id) => {
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

  return { getStarWarsPeople, getPeopleId };
};

export default PeopleService;
