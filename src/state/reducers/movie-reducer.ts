import {
  MovieActionType,
  MovieDispatchAction,
} from "../../models/movie-dispatch-action";
import { MovieState } from "../../models/movie-state";

const defaultState: MovieState = {
  movies: [],
  filteredMovies: [],
  filter: 0,
};

const reducer = function (
  state: MovieState = defaultState,
  action: MovieDispatchAction
) {
  switch (action.type) {
    case MovieActionType.FILTER:
      state.filter = action.payload;
      break;
    case MovieActionType.MOVIES:
      state.movies = action.payload;
      break;
  }

  state.filteredMovies = state.movies.filter((movie) => {
    const date = new Date(movie.release_date);
    return date.getFullYear() >= state.filter;
  });

  return state;
};

export default reducer;
