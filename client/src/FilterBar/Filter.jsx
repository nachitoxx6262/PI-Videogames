import { useDispatch,useSelector } from "react-redux";
import { FILTER, RESETs } from "../Redux/action";
export const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const handlerFilter = (e) => {
    dispatch(RESETs());
    dispatch({ type: FILTER, payload: e.target.value });
  };
  return (
    <>
      <section>
        <label style={{ color: "white" }} htmlFor="genre">
          Genre filter{" "}
        </label>
        <select onChange={handlerFilter}>
          <option disabled value="none">
            Select
          </option>
          {genres.length > 0
            ? genres.map((element, index) => {
                return (
                  <option key={index} value={element.genre}>
                    {element.genre}
                  </option>
                );
              })
            : "Loading"}
        </select>
      </section>
      <section>
        <label style={{ color: "white" }} htmlFor="type">
          VideoGame type filter{" "}
        </label>
        <select onChange={handlerFilter}>
          <option disabled value="none">
            Select
          </option>
          <option value="ALL">All</option>
          <option value="ADD">Added</option>
          <option value="EXI">Existing</option>
        </select>
      </section>
    </>
  );
};
