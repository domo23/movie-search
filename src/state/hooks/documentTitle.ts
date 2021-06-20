import { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../reducers";

export function useDocumentTitle() {
  const filteredMovies = useSelector(
    (state: State) => state.moviesState.filteredMovies
  );

  useEffect(() => {
    document.title = filteredMovies[0] ? filteredMovies[0].title : 'Star Wars';
  }, [filteredMovies]);
}
