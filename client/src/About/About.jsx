import React from "react";
import Nav from "../Nav/Nav";
import Style from "./About.module.css"
const About = () => {
  return (
    <>
    <Nav />
      <div className={Style.Body}>
        <h1 style={{"color":"white"}}>Ignacio Peñamaria here 👋</h1>
        <p style={{"color":"white"}}>This is one of the first projects in this beautiful career that is Full Stack Web Developer.💻</p>
      </div>
    </>
  );
};
export default About;
