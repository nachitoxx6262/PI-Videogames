import React from "react";
import Style from "./Games.module.css";
import {Link} from "react-router-dom"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getById } from "../Redux/action";
const Games = ({ name, image, id }) => {
  var id = id
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(getById(id));
  }
  return (
 
    <div className={Style.container}>
        
          <img className={Style.image} src={image} alt="not found" />
      
        <div>
          <Link to={`/${id}`} style={{ textDecoration: "none" }} onClick={handleClick}>
          <h3 className={Style.a}>{name}</h3>
          </Link>
          </div>
    </div>

  );
};
export default Games;
