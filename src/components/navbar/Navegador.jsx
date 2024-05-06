import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MenuContents from "../../content/menuContent";
import { useState, useEffect } from "react";
import styles from "./Navegador.module.css";
import { Link, useLocation } from "react-router-dom";

const Navegador = () => {
  const location = useLocation();
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setCategoriaAtiva(1);
    } else {
      const rotaAtual = MenuContents.find(
        (item) => item.href === location.pathname
      );
      if (rotaAtual) {
        setCategoriaAtiva(rotaAtual.id);
      }
    }
  }, [location.pathname]);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <nav>
      <Navbar
        collapseOnSelect
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        expand="lg"
        className={styles.menu}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className={styles.titulo}>
            <h1>Star Wars- Guia</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {MenuContents.map((items) => (
                <Nav.Link
                  key={items.id}
                  className={`${styles.li} ${
                    categoriaAtiva === items.id ? styles.ativos : ""
                  }`}
                  href={items.href}
                  onClick={handleSelect}
                >
                  {items.titulo}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navegador;
