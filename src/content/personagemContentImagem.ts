import React from "react";
import PersonagemProps from "../interfaces/personagemInterface";


const PersonagemContentImagem = ({ imagemFilme, veiculos, naves }: any): PersonagemProps[] => {
  const imagensPersCardContend: PersonagemProps[] = [
    {
      id: 1,
      titulo: "Filmes",
      conteudo: imagemFilme,
    },
    {
      id: 2,
      titulo: "Veiculos",
      conteudo: veiculos
    },
    {
      id: 3,
      titulo: "Naves",
      conteudo: naves
    }
  ];

  return imagensPersCardContend
}
export default PersonagemContentImagem;