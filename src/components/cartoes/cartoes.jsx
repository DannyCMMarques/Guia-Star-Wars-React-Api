import React from "react";
import { Card } from "react-bootstrap";
import styles from "./cartoes.module.css";
import { useLocation } from "react-router-dom";
const Cartoes = ({
  tituloCartao,
  textoCartao,
  handleCloseModal,
  showModal,
}) => {
  const location = useLocation();
  const tipoPagina = location.pathname.replace("/", "");

  const fechar = () => {
    handleCloseModal();
  };
  return (
    <>
      <Card className={tipoPagina === "films" ? styles.cartao2 : styles.cartao}>
        <Card.Header className={styles.headerCard}>
          <h3 onClick={() => fechar()}>{tituloCartao}</h3>
        </Card.Header>
        <Card.Body className={styles.bodyCard}>
          <Card.Text className={styles.texto}>{textoCartao}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cartoes;
