import React from "react";
import Style from "./NotFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={Style.App}>
      <h1 className={Style.NeonText}>Not Found <span className={Style.Span}>404</span></h1>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <p className={Style.P}>Back to Home...</p>
      </Link>
    </div>
  );
};
export default NotFound;
