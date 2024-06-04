import React from "react";
import PersonagemProps from "../interfaces/personagemInterface";

const NavesContent = ({ mgp, capacidade, consumiveis, creditos, tripulacao, hiperpropulsor, comprimento, fabricante, modelo, passageiros, classificacao }: any): PersonagemProps[] => {
  const navesCardContend: PersonagemProps[] = [
    {
      id: 10,
      titulo: "Modelo",
      conteudo: modelo,
    },
    {
      id: 12,
      titulo: "Classificação",
      conteudo: classificacao,
    }, {
      id: 9,
      titulo: "Fabricante",
      conteudo: fabricante,
    },
    {
      id: 1,
      titulo: "Megalight por hora",
      conteudo: mgp,
    },

    {
      id: 5,
      titulo: "Tripulação",
      conteudo: tripulacao,
    },
    {
      id: 6,
      titulo: "Hiperpropulsor",
      conteudo: hiperpropulsor,
    },
    {
      id: 7,
      titulo: "Comprimento",
      conteudo: comprimento,
    },


    {
      id: 11,
      titulo: "Passageiros",
      conteudo: passageiros,
    },


  ];

  return navesCardContend
}
export default NavesContent;