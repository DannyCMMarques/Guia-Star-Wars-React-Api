import React from "react";
import PersonagemProps from "../interfaces/personagemInterface";

const VeiculosContent = ({ capacidade, consumiveis, creditos, comprimento, fabricante, velocidade, modelo, passageiros, classe }: any): PersonagemProps[] => {
  const veiculosCardContend: PersonagemProps[] = [
    {
      id: 1,
      titulo: "Capacidade de Carga",
      conteudo: capacidade,
    },
   
    {
      id: 3,
      titulo: "Custo de Créditos",
      conteudo: creditos,
    },
    {
      id: 4,
      titulo: "Comprimento",
      conteudo: comprimento,
    },
    {
      id: 5,
      titulo: "Fabricante",
      conteudo: fabricante,
    },
    {
      id: 6,
      titulo: "Velocidade Atmosférica Máxima",
      conteudo: velocidade,
    },
    {
      id: 7,
      titulo: "Modelo",
      conteudo: modelo,
    },
    {
      id: 8,
      titulo: "Passageiros",
      conteudo: passageiros,
    },
    {
      id: 9,
      titulo: "Classe de Veículos",
      conteudo: classe,
    },


  ];

  return veiculosCardContend
}
export default VeiculosContent;