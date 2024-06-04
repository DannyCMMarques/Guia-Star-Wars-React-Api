import React from "react";
import styles from "./footer.module.css";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.sessao1}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/danny-marques/"
        >
          Desenvolvido por Danny Marques{" "}
        </a>
        <p className={styles.icones}>
          {" "}
          <a href="https://www.linkedin.com/in/danny-marques/">
            {" "}
            <Linkedin />{" "}
          </a>{" "}
          <a href="https://github.com/DannyCMMarques">
            {" "}
            <Github />{" "}
          </a>{" "}
        </p>
      </div>
      <div className={styles.sessao2}>
        <p>
          {" "}
          Todos os direitos reservados para © & ™{" "}
          <a href="https://www.lucasfilm.com/" className={styles.link}>
            Lucasfilm Ltd{" "}
          </a>
          . <br /> Imagens coletadas do{" "}
          <a
            href="https://starwars.fandom.com/wiki/Main_Page"
            className={styles.link}
          >
            Wookiepedia
          </a>
          . Informações adquiridas por meio da{" "}
          <a
            href="https://starwars.fandom.com/wiki/Main_Page"
            className={styles.link}
          >
            {" "}
            API Star Wars{" "}
          </a>
          .{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
