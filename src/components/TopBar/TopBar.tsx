import styles from "./TopBar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { FetchState } from "../../models/fetch-dispatch-action";

function TopBar() {
  const fetchState = useSelector(
    (state: State) => state.fetchState
  );

  return (
    <div className={styles.main}>
      <div className={styles.title}>SearchMovies</div>
      <div className={styles.titleMobile}>SM</div>
      <div className={styles.forms}>
        {fetchState === FetchState.LOADING && <div className={styles.loader}></div>}
        <div className={styles.searchBox}>
          <SearchBox></SearchBox>
        </div>
        <FilterBox></FilterBox>
      </div>
    </div>
  );
}

export default TopBar;
