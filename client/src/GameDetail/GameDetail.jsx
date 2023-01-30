import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getById } from "../Redux/action";
import Loading from "../Loading/Loading";
import Style from "./gamedetail.module.css";
import Nav from "../Nav/Nav";
import { resetByID } from './../Redux/action';
const Detail = ({
  image,
  name,
  description_raw,
  description,
  released,
  platform,
  genres,
  id
}) => {
  return (
    <>
      <div className={Style.Detail}>
        <img className={Style.img} src={image} />
        <h1>{name}</h1>
        <div  className={Style.Description}>{description_raw ? description_raw : description}</div>
        <p>{`Released: ${released}`}</p>
        <div>
          <p>{`Platform: ${platform}`}</p>
        </div>
        <div className={Style.h2}>
          <p>{`Genre: ${genres}`}</p>
        </div>
      </div>
    </>
  );
};
const GameDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  var { id } = useParams();

  let data = useSelector((state) => state.gameById);

  const handleClick=(event)=>{
    dispatch(resetByID())
   
  }
  useEffect(() => {
    if (data.length == 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data]);
  return (
    <div className={Style.Body}>
      <Nav />
      {isLoading ? (
        <Loading />
      ) : (
        <Detail
          name={data.name}
          description={data.description}
          description_raw={data.description_raw}
          image={data.image}
          released={data.released}
          platform={data.platform}
          genres={data.genres}
          id={data.id}         
        />
      )}
      <div className={Style.DivBtn}>

      <Link to="/home">
        <button className={Style.btn} onClick={handleClick}>
          Back
        </button>
      </Link>
      </div>
    </div>
  );
};
export default GameDetail;
