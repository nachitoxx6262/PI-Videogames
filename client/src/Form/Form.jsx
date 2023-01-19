import React from "react";
import Style from "./Form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios"
import Nav from "../Nav/Nav";
const Form = () => {
  const createGame = ({name,description,released,rating,genre,platform})=>{
    axios.post("http://localhost:3001/videogames",{name,description,released,rating,genre,platform})
    .then(res=> alert("personaje creado"))
  }
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genre: "",
    platform: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createGame(...form)
  };
  return (
    <>
    <Nav />
    <div className={Style.Body}>

    <div className={Style.todo}>
      <form onSubmit={handleSubmit} className={Style.form}>
      <h1>Create your custom Game</h1>
        <div className={Style.a}>
          <label>Name: </label>
          <input
          className={Style.btn}
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Name"
          ></input>
        </div>
        <div className={Style.a}>
          <label>Description: </label>
          <input
          className={Style.btn}
          onChange={handleChange}
          value={form.description}
          type="text"
          name="description"
          placeholder="Description"
          ></input>
        </div>
        <div className={Style.a}>
          <label>Released: </label>
          <input
          className={Style.btn}
          onChange={handleChange}
          value={form.released}
          type="date"
          name="released"
          placeholder="Released"
          ></input>
        </div>
        <div className={Style.a}>
          <label>Rating: </label>
          <input
          className={Style.btn}
          onChange={handleChange}
          value={form.rating}
          type="number"
          name="rating"
          placeholder="Rating"
          ></input>
        </div>
        <h1>Platform</h1>
        <label><input type="checkbox" /> Pc</label>
        <label><input type="checkbox" /> Xbox</label>
        <label><input type="checkbox" /> Play Station</label>
        <label><input type="checkbox" /> IOS</label>
        <label><input type="checkbox" /> Android</label>
        <h1>Genre</h1><label><input type="checkbox" /> Pc</label>
        <label><input type="checkbox" /> Action</label>
        <label><input type="checkbox" /> Indie</label>
        <label><input type="checkbox" /> Adventure</label>
        <label><input type="checkbox" /> RPG</label>
        <label><input type="checkbox" /> Strategy</label>
        <label><input type="checkbox" /> Shooter</label>
        <label><input type="checkbox" /> Casual</label>
        <label><input type="checkbox" /> Simulation</label>
        <label><input type="checkbox" /> Puzzle</label>
        <label><input type="checkbox" /> Arcade</label>
        <label><input type="checkbox" /> Platformer</label>
        <label><input type="checkbox" /> Racing</label>
        <label><input type="checkbox" /> Massively Multiplayer</label>
        <label><input type="checkbox" /> Sports</label>
        <label><input type="checkbox" /> Fighting</label>
        <label><input type="checkbox" /> Family</label>
        <label><input type="checkbox" /> Board Games</label>
        <label><input type="checkbox" /> Educational</label>
        <label><input type="checkbox" /> Card</label>
        <button className={Style.send}type="submit">ACEPTAR</button>
      </form>
    </div>
          </div>
          </>
  );
};

export default Form;
