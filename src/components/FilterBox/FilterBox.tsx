import styles from "./FilterBox.module.css";

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function FilterBox({onChange}: Props) {
  const getYears = function () {
    const START_YEAR = 1977;
    const length = new Date().getFullYear() - START_YEAR + 1;
    return [...Array(length).keys()].map((i) => i + START_YEAR);
  };
  const years = getYears();

  return (
    <div className={styles.main} data-testid="filter-box">
      <form>
        <select
          id="years"
          name="years"
          onChange={onChange}
          className={styles.select}
          data-testid="filter-box-select"
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
