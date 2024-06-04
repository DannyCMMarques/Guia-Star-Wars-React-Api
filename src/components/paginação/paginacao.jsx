import { useState } from "react";
import styles from "./paginacao.module.css";
import { ChevronDoubleRight, ChevronDoubleLeft } from "react-bootstrap-icons";

const PaginacaoPersonagem = ({ onPageChange, totalPages }) => {
  const [page, setPage] = useState(1);

  const onPageAnterior = () => {
    if (page !== 1) {
      const newPage = page - 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const onPageSeguinte = () => {
    if (page !== totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.central}>
      <ul>
        <li>
          <button
            type="button"
            onClick={onPageAnterior}
            className={styles.paginação}
          >
            <ChevronDoubleLeft />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => handlePage(index + 1)}
              className={
                page === index + 1
                  ? `${styles.paginação} ${styles.active}`
                  : styles.paginação
              }
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={onPageSeguinte}
            className={styles.paginação}
          >
            <ChevronDoubleRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginacaoPersonagem;
