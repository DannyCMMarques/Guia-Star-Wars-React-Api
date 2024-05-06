import  { useState } from "react";
import styles from "./cards.module.css";
import ModalComponent from "../Modal/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ModalInfo from "../Modal/Modal";
import { Button } from "react-bootstrap";
// import { InfoCircle } from "react-bootstrap-icons";
const CardsModal = ({
  titulo,
  imagem,
  tipo,
  titulo1,
  texto1,
  titulo2,
  texto2,
  titulo3,
  texto3,
  titulo4,
  texto4,
  titulo5,
  texto5,
  filme1,
  filme2,
  filme3,
chave
}) => {
  const [modalShow, setModalShow] = useState(false);


  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Clique para obter mais informações!
    </Tooltip>
  );

  return (
    <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    
   

    <div className={styles.card} onClick={() => setModalShow(true)} key={chave}>

      <div >
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
      <ModalInfo
        tipo={tipo}
        titulo1={titulo1}
        texto1={texto1}
        titulo2={titulo2}
        texto2={texto2}
        titulo3={titulo3}
        texto3={texto3}
        titulo4={titulo4}
        texto4={texto4}
        titulo5={titulo5}
        texto5={texto5}
        show={modalShow}
        filme1={filme1}
        filme2={filme2}
        filme3={filme3}
         handleCloseModal={handleClose}
      />

    </div>
    </OverlayTrigger>
  );
};

export default CardsModal;
