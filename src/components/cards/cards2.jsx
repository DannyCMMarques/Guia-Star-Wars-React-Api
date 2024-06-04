import { useEffect, useState } from "react";
import styles from "./cards.module.css";
import Tooltip from "react-bootstrap/Tooltip";
import Cartoes from "../cartoes/cartoes";
import Modal2 from "../Modal2";
import PersonagemContent from "../../content/personagemContent";
import FilmesContent from "../../content/filmesContent";
import VeiculosContent from "../../content/veiculosContent";
import { useLocation } from "react-router-dom";
import PlanetaContent from "../../content/planetaContent";
import NavesContent from "../../content/navesContent";
import EspeciesContent from "../../content/especiesContents";

const CardsModal2 = ({
  titulo,
  imagem,
  chave,
  ano,
  altura,
  peso,
  imagemFilme,
  diretor,
  especie,
  planeta,
  planetas,
  especies,
  naves,
  veiculos,
  dataLanc,
  velocidade,
  classe,
  mgp,
  capacidade,
  consumiveis,
  creditos,
  tripulacao,
  hiperpropulsor,
  comprimento,
  fabricante,
  modelo,
  passageiros,
  classificacao,
  clima,
  diametro,
  gravidade,
  periodo,
  populacao,
  terreno,
  rotacao,
  alturaMedia,
  expectativaVida,
  classificacao2,
  denominacao,
  coresOlhos,
  coresCabelos,
  linguagem,
  coresPele,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  function handleCloseModal() {
    setTimeout(() => {
      setModalOpen(false);
    }, 100);
  }

  const especiesCardContend = EspeciesContent({
    alturaMedia,
    expectativaVida,
    classificacao2,
    denominacao,
    coresOlhos,
    coresCabelos,
    linguagem,
    coresPele,
  });
  const veiculosCardContend = VeiculosContent({
    capacidade,
    consumiveis,
    creditos,
    comprimento,
    fabricante,
    velocidade,
    modelo,
    passageiros,
    classe,
  });
  const planetaCardContend = PlanetaContent({
    clima,
    diametro,
    gravidade,
    periodo,
    populacao,
    terreno,
    rotacao,
  });
  const navesCardContend = NavesContent({
    mgp,
    capacidade,
    consumiveis,
    creditos,
    tripulacao,
    hiperpropulsor,
    comprimento,
    fabricante,
    modelo,
    passageiros,
    classificacao,
  });

  const personagensCardContend = PersonagemContent({
    ano,
    altura,
    peso,
    especie,
    planeta,
    imagemFilme,
    veiculos,
    naves,
  });

  const FilmesCardContend = FilmesContent({
    diretor,

    planetas,
    especies,
    naves,
    veiculos,
    dataLanc,
  });

  const location = useLocation();
  const tipoPagina = location.pathname.replace("/", "");

  return (
    <>
    
        <div className={styles.card} onClick={handleOpenModal} key={chave}>
          <Modal2
            isOpen={modalOpen}
         
            
            onClose={handleCloseModal}
          >
            {tipoPagina === "films" ? (
              <>
                {FilmesCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    diretor={diretor}
                    planetas={planetas}
                    especies={especies}
                    naves={naves}
                    veiculos={veiculos}
                    dataLanc={dataLanc}
                  />
                ))}
              </>
            ) : tipoPagina === "people" ? (
              <>
                {personagensCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    ano={ano}
                    altura={altura}
                    peso={peso}
                    especie={especie}
                    planeta={planeta}
                    imagemFilme={imagemFilme}
                    veiculos={veiculos}
                    naves={naves}
                  />
                ))}
              </>
            ) : tipoPagina === "vehicles" ? (
              <>
                {veiculosCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    capacidade={capacidade}
                    consumiveis={consumiveis}
                    creditos={creditos}
                    comprimento={comprimento}
                    fabricante={fabricante}
                    velocidade={velocidade}
                    modelo={modelo}
                    passageiros={passageiros}
                    classe={classe}
                  />
                ))}
              </>
            ) : tipoPagina === "starships" ? (
              <>
                {navesCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    mgp={mgp}
                    capacidade={capacidade}
                    consumiveis={consumiveis}
                    creditos={creditos}
                    tripulacao={tripulacao}
                    hiperpropulsor={hiperpropulsor}
                    comprimento={comprimento}
                    fabricante={fabricante}
                    modelo={modelo}
                    passageiros={passageiros}
                    classificacao={classificacao}
                  />
                ))}
              </>
            ) : tipoPagina === "planets" ? (
              <>
                {planetaCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    clima={clima}
                    diametro={diametro}
                    gravidade={gravidade}
                    periodo={periodo}
                    populacao={populacao}
                    terreno={terreno}
                    rotacao={rotacao}
                  />
                ))}
              </>
            ) : tipoPagina === "species" ? (
              <>
                {especiesCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    alturaMedia={alturaMedia}
                    expectativaVida={expectativaVida}
                    classificacao2={classificacao2}
                    denominacao={denominacao}
                    coresOlhos={coresOlhos}
                    coresCabelos={coresCabelos}
                    linguagem={linguagem}
                    coresPele={coresPele}
                  />
                ))}
              </>
            ) : (
              ""
            )}
          </Modal2>

          <div>
            <div className={styles.sessaoImagem}>
              <img
                className={styles.imagem}
                src={imagem}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "./../../../mensagemError.png";
                }}
              />
            </div>
            <div className={styles.sessaoTitulo}>
              <h1 className={styles.titulo}>{titulo}</h1>
            </div>
          </div>
        </div>
    </>
  );
};
export default CardsModal2;
