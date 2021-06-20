import { MovieData } from "./movie-data";

export enum MovieActionType {
  FILTER = "filter",
  MOVIES = "fetch",
}

interface SetMovieAction {
  type: MovieActionType.MOVIES;
  payload: MovieData[];
}

interface SetFilterAction {
  type: MovieActionType.FILTER;
  payload: number;
}

export type MovieDispatchAction = SetMovieAction | SetFilterAction;
