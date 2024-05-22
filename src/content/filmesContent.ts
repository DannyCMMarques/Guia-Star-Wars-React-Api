import React from "react";
import FilmesProps from "../interfaces/filmeInterface";
const FilmesContent = ({ diretor, planetas, especies, naves, veiculos, dataLanc }: any): FilmesProps[] => {
  const filmeCardContend: FilmesProps[] = [
    {
      id: 1,
      titulo: "Diretores",
      conteudo: diretor
    },

    {
      id: 2,
      titulo: "Planetas",
      conteudo: planetas,
    },
    {
      id: 3,
      titulo: "Espécies",
      conteudo: especies,
    },
    {
      id: 4,
      titulo: "Naves Estelares",
      conteudo: naves,
    },
    {
      id: 5,
      titulo: "Veículos",
      conteudo: veiculos,
    },
    {
      id: 6,
      titulo: "Data de Lançamento",
      conteudo: dataLanc,
    }
  ];

  return filmeCardContend
}
export default FilmesContent;