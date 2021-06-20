import { useSelector } from "react-redux";
import MovieGridItem from "../MovieGridItem/MovieGridItem";
import styles from "./MovieGrid.module.css";
import { State } from "../../state";


function MovieGrid() {
  const filteredMovies = useSelector(
    (state: State) => state.moviesState.filteredMovies
  );

  return (
    <div className={styles.grid}>
      {filteredMovies.map((movie) => (
        <MovieGridItem key={movie.episode_id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
