import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import styles from "./FilterBox.module.css";

function FilterBox() {
  const dispatch = useDispatch();
  const { setFilter } = bindActionCreators(actionCreators, dispatch);

  const getYears = function () {
    const START_YEAR = 1977;
    const length = new Date().getFullYear() - START_YEAR + 1;
    return [...Array(length).keys()].map((i) => i + START_YEAR);
  };
  const years = getYears();

  const handleChange = function (event: React.ChangeEvent<HTMLSelectElement>) {
    const filter = Number(event.target.value);
    setFilter(filter);
  };

  return (
    <div className={styles.main}>
      <form>
        <select
          id="years"
          name="years"
          onChange={handleChange}
          className={styles.select}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default FilterBox;
