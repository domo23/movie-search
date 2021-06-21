import React from "react";

import TopBar from "./components/TopBar/TopBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import BackgroundInfo from "./components/BackgroundInfo/BackgroundInfo";
import { useSelector } from "react-redux";
import { State } from "./state";
import { FetchState } from "./models/fetch-dispatch-action";
import { useDocumentTitle } from "./state/hooks/documentTitle";
import { MovieData } from "./models/movie-data";

enum ReducedState {
  NO_DATA = "noData",
  ERROR = "error",
  OK = "ok",
}

function reduceState(fetchState: FetchState, filteredMovies: MovieData[]): ReducedState {
  if ([FetchState.SUCCESS, FetchState.LOADING].includes(fetchState)) {
    return filteredMovies.length > 0 ? ReducedState.OK : ReducedState.NO_DATA;
  } else {
    return ReducedState.ERROR;
  }
}

function App() {
  useDocumentTitle();
  const appState = useSelector((state: State) => state);

  const err = "Something went wrong while processing your request :(";
  const noData = "No data to display...";

  const state = reduceState(appState.fetchState, appState.moviesState.filteredMovies);

  return (
    <div>
      <TopBar />
      <div style={{ height: "calc(100% - 60px)" }}>
        {state === ReducedState.OK && <MovieGrid/>}
        {state === ReducedState.ERROR && <BackgroundInfo msg={err}/>}
        {state === ReducedState.NO_DATA && <BackgroundInfo msg={noData}/>}
      </div>
    </div>
  );
}

export default App;
