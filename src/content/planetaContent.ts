import React from "react";
import PersonagemProps from "../interfaces/personagemInterface";

const PlanetaContent = ({ clima, diametro, gravidade, periodo, populacao, terreno, rotacao }: any): PersonagemProps[] => {
  const planetaCardContend: PersonagemProps[] = [
    {
      id: 1,
      titulo: "Clima",
      conteudo: clima,
    },
    {
      id: 2,
      titulo: "Diâmetro",
      conteudo: diametro,
    },
    {
      id: 3,
      titulo: "Gravidade",
      conteudo: gravidade,
    },
    {
      id: 4,
      titulo: "Período Orbital",
      conteudo: periodo,
    },
    {
      id: 5,
      titulo: "População",
      conteudo: populacao,
    },
    {
      id: 6,
      titulo: "Período Rotacional",
      conteudo: rotacao,
    },
    {
      id: 7,
      titulo: "Terreno",
      conteudo: terreno,
    },

  ];

  return planetaCardContend
}
export default PlanetaContent;