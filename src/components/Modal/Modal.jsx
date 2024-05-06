import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.css";

const ModalInfo = ({
  tipo,
  texto1,
  titulo1,
  titulo2,
  texto2,
  titulo3,
  texto3,
  titulo4,
  texto4,
  titulo5,
  texto5,
  show,
  handleCloseModal,
  filme1,
  filme2,
  filme3
}) => {
  const handleClose = () => {
    handleCloseModal();
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <div className={styles.cabeçalho}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className={styles.titulo}> {tipo} </p>
          </Modal.Title>
        </Modal.Header>
      </div>
      <Modal.Body className={styles.body}>
        <div className={styles.divCentral}>
          <Col md={4} sm={12}>
            <Card className={styles.cartao}>
              <Card.Header className={styles.headerCard}>
                <h3> {titulo1} </h3>
              </Card.Header>
              <Card.Body className={styles.bodyCard}>
                <Card.Text className={styles.texto}>{texto1}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4}>
            <Card className={styles.cartao}>
              <Card.Header className={styles.headerCard}>
                <h3> {titulo2}</h3>
              </Card.Header>
              <Card.Body className={styles.bodyCard}>
                <Card.Text className={styles.texto}>{texto2}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4}>
            <Card className={styles.cartao}>
              <Card.Header className={styles.headerCard}>
                <h3> {titulo3}</h3>
              </Card.Header>
              <Card.Body className={styles.bodyCard}>
                <Card.Text className={styles.texto}>{texto3}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={12}>
            <Card className={styles.cartao1}>
              <Card.Header className={styles.headerCard}>
                <h3> {titulo4}</h3>
              </Card.Header>
              <Card.Body className={styles.bodyCard}>
                <Card.Text className={styles.texto2}>{texto4}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          <Card className={styles.cartao1}>
              <Card.Header className={styles.headerCard}>
                <h3> {titulo5}</h3>
              </Card.Header>
              <Card.Body className={styles.bodyCard}>
                <img src={filme1}>
                </img>
                <img src={filme2}>
                </img>
                <img src={filme3}>
                </img>
              </Card.Body>
            </Card>
          
          </Col>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.cabeçalho}>
        <button  onClick={handleCloseModal}>fechar</button>
      <Button  onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInfo;
