import { Order } from "./Order.jsx"
import { Filter } from "./Filter.jsx"
import Style from "./FilterBar.module.css"
const FilterBar = () => {
  return (
    <>
      <div className={Style.bar}>
        <Order/>
        <Filter/>
      </div>
    </>
  );
};
export default FilterBar;
