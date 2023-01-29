import Style from "./FilterBar.module.css";
import { ORDER, RESETs } from "../Redux/action";
const { useDispatch } = require("react-redux");
export const Order = () => {
  const dispatch = useDispatch();
  const handlerFilter = (e) => {
    console.log("pase");
    dispatch(RESETs());
    dispatch({ type: ORDER, payload: e.target.value });
  };
  return (
    <div>
      <section>
        <label style={{ color: "white" }} htmlFor="alph">
          Alphabetical order{" "}
        </label>
        <select className={Style.Select} onChange={handlerFilter}>
          <option className={Style.option} disabled value="none">
            Select
          </option>
          <option className={Style.option} value="ASC">'A to Z'</option>
          <option className={Style.option} value="DESC">'Z to A'</option>
        </select>
      </section>
      <section>
        <label style={{ color: "white" }} htmlFor="rating">
          Rating order{" "}
        </label>
        <select className={Style.Select} onChange={handlerFilter}>
          <option className={Style.option} disabled value="none">
            Select
          </option>
          <option className={Style.option} value="MAY">High to low</option>
          <option className={Style.option} value="MEN">Low to high</option>
        </select>
      </section>
    </div>
  );
};
