import { useState } from "react";
import styles from "./cards.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ModalInfo from "../Modal/Modal";
import Cartoes from "../cartoes/cartoes";
import Modal2 from "../Modal2";
import CartaoImagem from "../cartaoImagem/cartaoImagem";

const CardsModal = ({ titulo, imagem, chave }) => {
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

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <div className={styles.card} onClick={handleOpenModal} key={chave}>
          <Modal2 isOpen={modalOpen} size="small" onClose={handleCloseModal}>
            <Cartoes tituloCartao={titulo} textoCartao={titulo} />
            <CartaoImagem src={imagem} tituloImagem="cabritada" />
          </Modal2>
          <div>
            {/* <div>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <button className={styles.btn} onClick={() => setModalShow(true)}>
              <InfoCircle />
            </button>
          </OverlayTrigger>
        </div> */}
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
