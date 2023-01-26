import { Order } from "./Order.jsx"
import { Filter } from "./Filter.jsx"
import Style from "./FilterBar.module.css"
const FilterBar = () => {
  return (
    <>
      <div className={Style.bar}>
        <Order/>
        <Filter/>
        {/* 

         const genres = useSelector((state) => state.genres);
  const handlerFilter = (e) => {
    console.log("pase")
      dispatch(RESETs());
      dispatch({ type: ORDER, payload: e.target.value });
  };
  return (
  <section>
    <label style={{"color":"white"}} htmlFor="genre">Genre filter </label>
      <select onChange={handlerFilter}>
        <option disabled value="none">Select</option>
            {genres.length > 0
              ? genres.map((element, index) => {
                  return (
                    <option key={index} value={element.genre}>
                      {element.genre}
                    </option>
                  );
                })
              : "Loading"
            }
      </select>
  </section>

        <section>
          <label style={{"color":"white"}} htmlFor="type">VideoGame type filter </label>
          <select
            value={filteringInput.type}
            name="type"
          >
            <option disabled value="none">
              Select
            </option>
            <option value="added">Added</option>
            <option value="existing">Existing</option>
          </select>
        </section> */}
      </div>
    </>
  );
};
export default FilterBar;
