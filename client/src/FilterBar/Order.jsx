import { ORDER, RESETs } from "../Redux/action";
const { useSelector, useDispatch } = require("react-redux");
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
        <label style={{ color: "white" }} htmlFor="alph">Alphabetical order{" "}</label>
        <select onChange={handlerFilter}>
          <option disabled value="none">Select</option>
          <option value="ASC">'A to Z'</option>
          <option value="DESC">'Z to A'</option>
        </select>
      </section>
      <section>
        <label style={{ color: "white" }} htmlFor="rating">Rating order{" "}</label>
        <select onChange={handlerFilter}>
          <option disabled value="none">Select</option>
          <option value="MAY">High to low</option>
          <option value="MEN">Low to high</option>
        </select>
      </section>
    </div>
  );
};
