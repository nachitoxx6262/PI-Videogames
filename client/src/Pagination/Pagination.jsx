import React from "react";
import Style from "./Pagination.module.css"
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={Style.Div}>
      <ul className={Style.Pagination} >
        <li className={Style.li}>
          <button className={Style.btn}
            href="#"
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            Anterior
          </button>
        </li>
        {pages.map((page) => {
          return (
            <li key={page} className={Style.li}>
              <button style={{"color":"white","text-decoration": "none"}}
                href="#"
                className={  currentPage === page ? Style.btnactive :Style.btn }
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className={Style.li}>
          <button className={Style.btn}
            href="#"
            onClick={() => {
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
