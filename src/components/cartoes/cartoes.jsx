import React from "react";
import { Card } from "react-bootstrap";
import styles from "./cartoes.module.css";
const Cartoes = ({ tituloCartao, textoCartao }) => {
  return (
    <>
      <Card className={styles.cartao}>
        <Card.Header className={styles.headerCard}>
          <h3>{tituloCartao}</h3>
        </Card.Header>
        <Card.Body className={styles.bodyCard}>
          <Card.Text className={styles.texto}>{textoCartao}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cartoes;
