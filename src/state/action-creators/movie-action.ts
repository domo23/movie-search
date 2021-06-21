import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { FetchState } from "../../models/fetch-dispatch-action";
import { MovieApiResponse } from "../../models/movie-api-response";

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

const getMovies = async function (
  filter: string
): Promise<AxiosResponse<MovieApiResponse>> {
  return await axios.get(`https://swapi.dev/api/films/?search=${filter}`);
};

export const setMovies = function (filter: string) {
  return async (dispatch: Dispatch<any>) => {
    if (filter === "") {
      dispatch({
        type: MovieActionType.MOVIES,
        payload: [],
      });
      return;
    }

    dispatch({ type: FetchState.LOADING });
    try {
      const movies = (await getMovies(filter)).data.results;
      dispatch({
        type: MovieActionType.MOVIES,
        payload: movies,
      });
      dispatch({ type: FetchState.SUCCESS });
    } catch (error) {
      console.error(error);
      dispatch({ type: FetchState.ERROR });
    }
  };
};
