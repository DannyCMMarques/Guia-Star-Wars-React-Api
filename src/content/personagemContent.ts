import React from "react";
import PersonagemProps from "../interfaces/personagemInterface";

const PersonagemContent = ({ ano, altura, peso, especie, planeta }: any): PersonagemProps[] => {
  const personagensCardContend: PersonagemProps[] = [
    {
      id: 1,
      titulo: "Ano de Nascimento",
      conteudo: ano,
    },
    {
      id: 2,
      titulo: "Altura",
      conteudo: altura,
    },
    {
      id: 3,
      titulo: "Peso",
      conteudo: peso,
    },
    {
      id: 4,
      titulo: "Espécie",
      conteudo: especie,
    },
    {
      id: 5,
      titulo: "Planeta Natal",
      conteudo: planeta
    },


  ];

  return personagensCardContend
}
export default PersonagemContent;