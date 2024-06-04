import PersonagemProps from "../interfaces/personagemInterface";

const EspeciesContent = ({ alturaMedia, expectativaVida, classificacao2, denominacao, coresOlhos, coresCabelos, linguagem, coresPele }: any): PersonagemProps[] => {
  const especiesCardContend: PersonagemProps[] = [
    {
      id: 1,
      titulo: "Altura Média",
      conteudo: alturaMedia,
    },
    {
      id: 2,
      titulo: "Expectativa de Vida",
      conteudo: expectativaVida,
    },
    {
      id: 3,
      titulo: "Classificação",
      conteudo: classificacao2,
    },
    {
      id: 4,
      titulo: "Denominação",
      conteudo: denominacao,
    },
    {
      id: 5,
      titulo: "Cor dos Olhos",
      conteudo: coresOlhos,
    },
    {
      id: 6,
      titulo: "Cor dos Cabelos",
      conteudo: coresCabelos,
    },
    {
      id: 7,
      titulo: "Linguagem",
      conteudo: linguagem,
    },
    {
      id: 8,
      titulo: "Cor de Pele",
      conteudo: coresPele,
    },




  ];

  return especiesCardContend
}
export default EspeciesContent;