import { combineReducers } from "redux";
import movieReducer from "./movie-reducer";

const reducers = combineReducers({
  moviesState: movieReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;