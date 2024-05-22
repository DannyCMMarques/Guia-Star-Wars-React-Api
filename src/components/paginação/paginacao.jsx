import { useState } from "react";
import styles from "./paginacao.module.css";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import { ChevronDoubleLeft } from "react-bootstrap-icons";

const PaginacaoPersonagem = ({ onPageChange, totalPages }) => {
  const [page, setPage] = useState(1);
  const onPageAnterior = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else setPage(1);
  };
  const onPageSeguinte = () => {
    if (page !== totalPages) {
      setPage(page + 1);
    } else setPage(totalPages);
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
              className={styles.paginação}
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
