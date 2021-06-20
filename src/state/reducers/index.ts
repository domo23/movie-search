import { combineReducers } from "redux";
import movieReducer from "./movie-reducer";
import fetchReducer from './fetch-reducer';

const reducers = combineReducers({
  moviesState: movieReducer,
  fetchState: fetchReducer
});

export default reducers;
export type State = ReturnType<typeof reducers>;