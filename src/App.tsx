import React from "react";

import TopBar from "./components/TopBar/TopBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import BackgroundInfo from "./components/BackgroundInfo/BackgroundInfo";
import { useSelector } from "react-redux";
import { State } from "./state";
import { FetchState } from "./models/fetch-dispatch-action";
import { useDocumentTitle } from "./state/hooks/documentTitle";

function App() {
  useDocumentTitle();
  const appState = useSelector((state: State) => state);

  const err = "Something went wrong while processing your request :(";

  return (
    <div>
      <TopBar />
      <div style={{ height: "calc(100% - 60px)" }}>
        {[FetchState.SUCCESS, FetchState.LOADING].includes(
          appState.fetchState
        ) ? (
          <MovieGrid />
        ) : (
          <BackgroundInfo msg={err} />
        )}
      </div>
    </div>
  );
}

export default App;
