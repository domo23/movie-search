import styles from "./TopBar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";

function TopBar() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>SearchMovies</div>
      <div className={styles.forms}>
        <div className={styles.searchBox}><SearchBox></SearchBox></div>
        <FilterBox></FilterBox>
      </div>
    </div>
  );
}

export default TopBar;
