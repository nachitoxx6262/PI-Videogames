import React from "react";
import Style from "./Games.module.css";
import {Link} from "react-router-dom"
import { useState } from "react";
const Games = ({ name, released, rating, platform, image, id }) => {
  return (
 
    <div className={Style.container}>
        
          <img className={Style.image} src={image} alt="not found" />
      
        <div>
          <Link to={{id}} style={{ textDecoration: "none" }}>
          <h3 className={Style.a}>{name}</h3>
          </Link>
          </div>
    </div>

  );
};
export default Games;
