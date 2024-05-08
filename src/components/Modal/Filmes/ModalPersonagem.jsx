import React from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import styles from './../Modal.module.css'
const ModalPersonagem = (show,filmes,Nome,) => {
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
          <p className={styles.titulo}> {Nome} </p>
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

        <Col md={12} style={{ marginTop: 20 }}>
          <Card className={styles.cartao1}>
            <Card.Header className={styles.headerCard}>
              <h3> {titulo5}</h3>
            </Card.Header>
            <Card.Body className={styles.bodyCard}>
              {filmes?.map((filme) => (
                <p
                  key={filme?.episode_id}
                  style={{ color: "white", textAlign: "center" }}
                >
                  {filme?.title}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Col> 
      </div>
    </Modal.Body>
    <Modal.Footer className={styles.cabeçalho}>
      <Button onClick={handleCloseModal}>Close</Button>
    </Modal.Footer>
  </Modal>
  


  )
}

export default ModalPersonagem


// ano de nascimento 
// altura
// genero 
// homeworld
// peso 
// filmes 
// starships
// veiculos 


