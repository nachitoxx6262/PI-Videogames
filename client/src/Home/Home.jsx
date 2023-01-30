import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Home.module.css";
import Games from "../Games/Games";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getgames,getGenre } from "../Redux/action";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import logo from "../image/logo.svg";
import { RESETs, searchGames } from "../Redux/action";
import FilterBar from "../FilterBar/FilterBar";
const Home = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const data = useSelector((state) => state.gamesFilter);
  const handleChange = (event) => {
    setCurrentPage(1)
    let value = event.target.value;
    setSearch(value)
    if (value === "") {
      dispatch(RESETs());
    } else {
      dispatch(searchGames(value));
    }
  };

  useEffect(() => {
    dispatch(getgames())
    dispatch(getGenre())
  }, [dispatch]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={Style.body}>

        <div className={Style.contenedor}>
          <div className={Style.titlediv}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <img className={Style.img} src={logo} />
            </Link>
          </div>
          <div className={Style.searchdiv}>
            <input
              className={Style.input}
              type="text"
              placeholder="Search"
              onChange={handleChange}
              ></input>
              {data.length===0 && search != "" ?<label style={{"color":"red","fontSize":"12px"}}>No se encontro...</label>: <label></label>}
          </div>
          <div className={Style.divbtn}>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <a className={Style.btn}>Form</a>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <a className={Style.btn}>About</a>
            </Link>
          </div>
        </div>
        <div className={Style.bar}>
        <FilterBar/>
        </div>
        <div className={Style.render}>
          
          {data?.length== 0 ? (
            <Loading />
          ) : (
            currentItems.map((element) => {
              return (
                <Games
                  genre={element.genres}
                  name={element.name}
                  released={element.released}
                  rating={element.rating}
                  platform={element.platform}
                  image={element.image}
                  id={element.id}
                />
              );
            })
          )}
        </div>
        <div className={Style.pagination}>
          {data.length > 10? <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />: <></> }
        </div>
      </div>
    </>
  );
};
export default Home;
