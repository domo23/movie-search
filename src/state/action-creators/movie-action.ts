import { Dispatch } from "react";
import { MovieData } from "../../models/movie-data";
import {
  MovieActionType,
  MovieDispatchAction,
} from "../../models/movie-dispatch-action";

export const setFilter = function (filter: number) {
  return (dispatch: Dispatch<MovieDispatchAction>) => {
    dispatch({
      type: MovieActionType.FILTER,
      payload: filter,
    });
  };
};

export const setMovies = function (movies: MovieData[]) {
  return (dispatch: Dispatch<MovieDispatchAction>) => {
    dispatch({
      type: MovieActionType.MOVIES,
      payload: movies,
    });
  };
};
