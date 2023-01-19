import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getById } from "../Redux/action";
import Loading from "../Loading/Loading";
import Style from "./gamedetail.module.css"
import Nav from "../Nav/Nav";
const Detail = ({image,name,description_raw,description,released,platform,genres,id}) =>{
    return(
<>  
<div className={Style.Detail}>

          <img className={Style.img} src={image}/>
          <h1>{name}</h1>
          <>
          {description_raw?description_raw: description }
          </>
          <p>{`Released: ${released}`}</p>
          <div>
          <p>{`Platform: ${platform}`}</p>
          </div>
          <div className={Style.h2}>
          <p>{`Genre: ${genres}`}</p>
          </div>
          <Link to="/home">
            <button className={Style.btn}>Back</button>
          </Link>
</div>
        </>
    )
}
const GameDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  var { id } = useParams();
  
  
  const data = useSelector((state) => state.gameById);

  useEffect(() => {
      dispatch(getById(id));
      setIsLoading(false)
    //   if (data.length == 0) {
    //     setIsLoading(false);
    // }else{
    //     setIsLoading(false);
    }
, []);
  return (
    <div className={Style.Body}>
        <Nav/>
      {isLoading && !data.length? (
        <Loading />
      ) : <Detail name={data.name} description={data.description} description_raw={data.description_raw} image={data.image} released={data.released} platform={data.platform} genres={data.genres} id={data.id} />}
    </div>
  );
};
export default GameDetail;
