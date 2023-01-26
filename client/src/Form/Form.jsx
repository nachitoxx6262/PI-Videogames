import React from "react";
import Style from "./Form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "../Nav/Nav";
import { getgames } from "./../Redux/action";
const Form = () => {
  const dispatch = useDispatch();
  const createGame = async ({
    name,
    description,
    released,
    rating,
    genre,
    platform,
  }) => {
    try {
      let data = {
        name: `${name}`,
        description: `${description}`,
        released: `${released}`,
        rating: `${rating}`,
        genre: `${genre}`,
        platform: `${platform}`,
      };
      console.log(data);
      let response = await axios({
        url: "http://localhost:3001/videogames",
        method: "POST",
        data: data,
      });
      dispatch(getgames());
      return response;
    } catch (e) {
      console.log(e);
    }
  };
  const genres = useSelector((state) => state.genres);
  const [Checked, setChecked] = useState(new Array(genres.lenght).fill(false));
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genre: [],
    platform: "",
  });
  const handleChange = (event) => {
    console.log("cambie")
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createGame(form);
  };
  return (
    <>
      <Nav />
      <div className={Style.Body}>
        <div className={Style.todo}>
          <form onSubmit={handleSubmit} className={Style.form}>
            <div className={Style.TitleDiv}>
              <h1>Create your custom Game</h1>
            </div>
            <div className={Style.Par}>
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
            </div>
            <div className={Style.Par}>
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
                  name="rating"
                  type="number"
                  placeholder="Rating"
                ></input>
              </div>
            </div>
            <div className={Style.Platform}>
              <h1>Platform</h1>
            </div>
            <div className={Style.Platform}>
              <h1>Genre</h1>
              <div className={Style.Platform}>
                {genres?.map((element) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        name="genre"
                        value={element.genre}
                        id={element.id}
                        checked={Checked[element.id-1]}
                        onChange={handleChange}
                      />
                      {element.genre}
                    </label>
                  );
                })}
              </div>
            </div>
            <div className={Style.SendBtn}>
              <button className={Style.send} type="submit">
                ACEPTAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
