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
    platform,
  }) => {
    try {
      let data = {
        name: `${name}`,
        description: `${description}`,
        released: `${released}`,
        rating: `${rating}`,
        genre: array,
        platform: plataformas,
      };

      let response = await axios({
        url: "http://localhost:3001/videogames",
        method: "POST",
        data: data,
      });
      dispatch(getgames());
      return response;
    } catch (e) {
    }
  };
  const [ok, setOk] = useState(false)
  const genres = useSelector((state) => state.genres);
  const [Checked, setChecked] = useState(new Array(genres.lenght).fill(false));
  var array = []
  var plataformas = ""
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };
  const handleChangeGere = (event)=>{
    const value = event.target.id;
    array.push(Number(value))
  }
  const handleChangePlatform = (event)=>{
    const value = event.target.value;
    plataformas = plataformas +value+","
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createGame(form);
    array = []
    plataformas = ""
    setForm({name: "",
    description: "",
    released: "",
    rating: "",})
    setOk(true)
    setTimeout(function(){
      setOk(false)
    },2000)
  };
  return (
    <>
      <Nav />
      <div className={Style.Body}>
        {ok == true ? <div className={Style.todok}></div>:<div className={Style.todo}>
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
              <div className={Style.Platformcontent}>

              <label>
                      <input type="checkbox" name="PC" value={"PC"}  onChange={handleChangePlatform}
                       />
                      PC </label>
                      <label>
                      <input type="checkbox" name="Play Station" value={"Play Station"} onChange={handleChangePlatform}
                       />
                      Play Station </label>
                      <label>
                      <input type="checkbox" name="Xbox"  value={"Xbox"}  onChange={handleChangePlatform}
                       />
                      Xbox </label>
                      <label>
                      <input type="checkbox" name="Nintendo"  value={"Nintendo"}  onChange={handleChangePlatform}
                       />
                      Nintendo </label>
                      <label>
                      <input type="checkbox" name="Android"  value={"Android"}  onChange={handleChangePlatform}
                       />
                      Android </label>
                      <label>
                      <input type="checkbox" name="IOS"  value={"IOS"}  onChange={handleChangePlatform}
                       />
                      IOS </label>
                </div>
            </div>
            <div className={Style.Platform}>
              <h1>Genre</h1>
              <div className={Style.Platformcontent}>
                {genres?.map((element) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        name="genre"
                        value={element.genre}
                        id={element.id}
                        checked={Checked[element.id-1]}
                        onChange={handleChangeGere}
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
        </div> }
        
      </div>
    </>
  );
};

export default Form;
