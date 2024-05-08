import { useState } from "react";
import styles from "./cards.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ModalInfo from "../Modal/Modal";
import { Button } from "react-bootstrap";
import ModalPersonagem from "../Modal/Filmes/ModalPersonagem";
import Modal2 from "../Modal2";
import ModalModelo from "../ModalModelo/ModalModelo";
import Cartoes from './../cartoes/cartoes'
import CartaoImagem from "./../cartaoImagem/cartaoImagem";
const CardsModal = ({
  tituloCard,
  imagem,
  chave, 
  tituloModal
   
}) => {
  const [modalOpen, setModalOpen] = useState(false);  
  
  const handleOpenModal = () => {
  
    setModalOpen(true);
  
  }
const handleCloseModal = () => {
  console.log(modalOpen)
  setModalOpen(false);
  console.log(modalOpen)


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
      <div
        className={styles.card}
        onClick={handleOpenModal }
        key={chave}
      >
  
        <div  onClick={handleOpenModal }>
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
            <h1 className={styles.titulo}>{tituloCard}</h1>
          </div>
        </div>
       {/* <Modal2 isOpen={modalOpen} size="small" onClose={handleCloseModal} titulo={tituloModal} >       
         <Cartoes/>
         <CartaoImagem/>
        </Modal2>  */}
         
        

      </div>
    </OverlayTrigger>
  );
};
}
export default CardsModal;
