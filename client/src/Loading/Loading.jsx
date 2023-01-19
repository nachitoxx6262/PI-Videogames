import React from "react";
import Nav from "../Nav/Nav";
import Style from "./Loading.module.css"
import logo from '../image/loading.svg';
const Loading = () => {
  return (
    <div className={Style.App}>
      <header className={Style.AppHeader}>
        <img src={logo} className={Style.AppLogo} alt="logo" />
        <p className={Style.P}>
          Loading...
        </p>
      </header>
    </div>
  );
};
export default Loading;
