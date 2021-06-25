import styles from "./TopBar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { FetchState } from "../../models/fetch-dispatch-action";
import { bindActionCreators } from "redux";

function TopBar() {
  const dispatch = useDispatch();
  const { setFilter, setMovies } = bindActionCreators(actionCreators, dispatch);

  const fetchState = useSelector((state: State) => state.fetchState);

  const handleFilterChange = function (
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const filter = Number(event.target.value);
    setFilter(filter);
  };

  const handleSearchChange = function (value: string) {
    setMovies(value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>SearchMovies</div>
      <div className={styles.titleMobile}>SM</div>
      <div className={styles.forms}>
        {fetchState === FetchState.LOADING && (
          <div className={styles.loader}></div>
        )}
        <div className={styles.searchBox}>
          <SearchBox onChange={handleSearchChange}></SearchBox>
        </div>
        <FilterBox onChange={handleFilterChange}></FilterBox>
      </div>
    </div>
  );
}

export default TopBar;
