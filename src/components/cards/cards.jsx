import { useState } from "react";
import styles from "./cards.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ModalInfo from "../Modal/Modal";
import Cartoes from "../cartoes/cartoes";
import Modal2 from "../Modal2";
import CartaoImagem from "../cartaoImagem/cartaoImagem";
import PersonagemContent from "../../content/personagemContent";
import PersonagemContentImagem from "../../content/personagemContentImagem";
import FilmesContent from "../../content/filmesContent";

import { useLocation } from "react-router-dom";

const CardsModal = ({
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
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Clique para obter mais informações!
    </Tooltip>
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const personagensCardContend = PersonagemContent({
    ano,
    altura,
    peso,
    especie,
    planeta,
  });
  const imagensPersCardContend = PersonagemContentImagem({
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
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <div className={styles.card} onClick={handleOpenModal} key={chave}>
          <Modal2 isOpen={modalOpen} size="small" onClose={handleCloseModal}>
            {tipoPagina === "people" ? (
              <>
                {personagensCardContend.map((item) => (
                  <Cartoes
                    key={item.id}
                    tituloCartao={item.titulo}
                    textoCartao={item.conteudo}
                    ano={ano}
                    peso={peso}
                    altura={altura}
                    especie={especie}
                    planeta={planeta}
                  />
                ))}
                {imagensPersCardContend.map((item) => (
                  <CartaoImagem
                    key={item.id}
                    imagem={item.conteudo}
                    tituloImagem={item.titulo}
                    imagemFilme={imagemFilme}
                    veiculos={veiculos}
                    naves={naves}
                  />
                ))}
              </>
            ) : tipoPagina === "films" ? (
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
            ) : null}
          </Modal2>
          <div>
            <div className={styles.sessaoImagem}>
              <img className={styles.imagem} src={imagem}></img>
            </div>
            <div className={styles.sessaoTitulo}>
              <h1 className={styles.titulo}>{titulo}</h1>
            </div>
          </div>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default CardsModal;
