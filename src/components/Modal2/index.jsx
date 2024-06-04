import styles from "./styles.module.css";
import { X } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const Modal2 = ({ isOpen, children,onClose }) => {
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const location = useLocation();
  const tipoPagina = location.pathname.replace("/", "");

  return (
    <div
      className={styles.modalContainer}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div
        className={
          tipoPagina === "films" ? styles.modalContent : styles.modalContent
        }
      >
        <div className={` d-flex justify-content-between ${styles.cabeçalho}`}>
          <p className={styles.tituloModal}></p>
          <X className={styles.closeModal} onClick={handleCloseModal} />
        </div>
        <div className={tipoPagina === "films" ? styles.body2 : styles.body}>
          {children}
        </div>
        <div className={styles.cabeçalho}></div>
      </div>
    </div>
  );
};

export default Modal2;
