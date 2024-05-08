import React from 'react'
import styles from './cartaoImagem.module.css'
import { Card, Image } from 'react-bootstrap'
const CartaoImagem = (src,tituloImagem) => {
  return (
    <>
    <Card className={styles.cartao}>
           <Card.Header className={styles.headerCard}>
            <h3>{tituloImagem}</h3>
           </Card.Header>
           <Card.Body className={styles.bodyCard}>
           <Image className={styles.tamanhoImagem} src={src} roundedCircle />
           </Card.Body>
         </Card>
   
   
   </>

  )
}

export default CartaoImagem