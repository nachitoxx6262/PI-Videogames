import React from "react";
import { useEffect } from "react";
import { getgames } from "../Redux/action";
import Style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../image/logo.svg";
const Landing = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getgames())
  },[])
  return (
    <div className={Style.background}>
      <div className={Style.div}>
        <img className={Style.img} src={logo} />
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <button className={Style.btn}>START</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
