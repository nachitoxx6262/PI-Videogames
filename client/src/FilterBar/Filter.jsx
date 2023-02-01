import Style from "./FilterBar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { FILTER, RESETs } from "../Redux/action";
export const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const handlerFilter = (e) => {
    dispatch({ type: FILTER, payload: e.target.value });
  };
  const reset =()=>{
    dispatch({ type: RESETs });
  }
  return (
    <div>
      <section>
        <label style={{ color: "white" }} htmlFor="type">
          VideoGame type filter{" "}
        </label>
        <select  className={Style.Select} onChange={handlerFilter}>
          <option className={Style.option} disabled value="none">
            Select
          </option>
          <option className={Style.option} value="ALL">All</option>
          <option className={Style.option} value="ADD">Added</option>
          <option className={Style.option} value="EXI">Existing</option>
        </select>
      </section>

      <section>
        <label style={{ color: "white" }} htmlFor="genre">
          Genre filter{" "}
        </label>
        <label style={{ color: "white" }} >Genre{" "}</label>
        <select className={Style.Select} onChange={handlerFilter}>
        <option className={Style.option} value="ALL">All</option>
        {genres.length > 0
          ? genres.map((element) => {
              return (
                <>
          <option className={Style.option} value={element.genre}>{element.genre}</option>
                </>
              );
            })
          : "Loading"}
          </select>
      </section>
      <section>
        <button className={Style.Select} onClick={reset}>Reset Filter</button>
      </section>
    </div>
  );
};
