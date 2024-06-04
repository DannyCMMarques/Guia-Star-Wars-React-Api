import React from "react";
import logoAnakin from "../../assets/anakin_logo.svg";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src={logoAnakin}
            alt="logoSpinner"
            className={`${styles.floating} ${styles.glowing}`}
          />
          <div
            className={styles.filterOpacity}
            style={{ textAlign: "center", color: "white" }}
          >
            <p>Carregando</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
