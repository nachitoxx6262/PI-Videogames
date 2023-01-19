import React from "react";
import Style from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from '../image/logo.svg';
import { useState } from "react";
const Nav = () => {
  return (
    <>
    <div>
      <div className={Style.contenedor}>
        <div className={Style.titlediv}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img className={Style.img} src={logo} />
          </Link>
        </div>
        <div className={Style.divbtn}>
          <Link to="/form" style={{ textDecoration: 'none' }}>
            <a className={Style.btn}>Form</a>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <a className={Style.btn}>About</a>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
