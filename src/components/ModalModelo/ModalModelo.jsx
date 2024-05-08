import React from 'react'
import styles from './Modal.module.css'
const ModalModelo = () => {
  return (
<>
   <div>
    <div className={styles.cabeçalho }> 
header
     </div>
<div className={styles.body}>
  body
</div>
<div className={styles.cabeçalho}>
    footer
</div>
   </div>



</>
 
  )
}

export default ModalModelo