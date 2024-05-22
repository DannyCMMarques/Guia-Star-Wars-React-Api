import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { X } from "react-bootstrap-icons";

const Modal2 = ({ isOpen, children, size, titulo, onClose, conteudo }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
    if (onClose) {
      onClose();
    }
  };

  let contentClass;
  switch (size) {
    case "small":
      contentClass = styles.modalContentS;
      break;
    case "medium":
      contentClass = styles.modalContentM;
      break;
    case "large":
      contentClass = styles.modalContentL;
      break;
    default:
      contentClass = styles.modalContent;
  }

  return (
    <div
      className={styles.modalContainer}
      style={{ display: modalOpen ? "block" : "none" }}
    >
      <div className={contentClass}>
        <div className={` d-flex justify-content-between ${styles.cabeçalho}`}>
          <p className={styles.tituloModal}>{titulo}</p>
          <X className={styles.closeModal} onClick={handleCloseModal} />
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.cabeçalho}></div>
      </div>
    </div>
  );
};

export default Modal2;
