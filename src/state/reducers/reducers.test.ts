import movieReducer from "./movie-reducer";
import fetchReducer from "./fetch-reducer";
import { MovieActionType } from "../../models/movie-dispatch-action";
import { FetchState } from "../../models/fetch-dispatch-action";

describe("movie reducer", () => {
  const mockData = [
    {
      title: "Title",
      director: "Director",
      release_date: "1977-05-25",
      opening_crawl: "Beginning...",
    },
  ];

  it("should return the initial state", () => {
    expect(
      movieReducer(undefined, { type: MovieActionType.MOVIES, payload: [] })
    ).toEqual({
      movies: [],
      filteredMovies: [],
      filter: 0,
    });
  });

  it("should handle MovieActionType.MOVIES", () => {
    expect(
      movieReducer(undefined, {
        type: MovieActionType.MOVIES,
        payload: mockData,
      })
    ).toEqual({
      movies: mockData,
      filteredMovies: mockData,
      filter: 0,
    });
  });

  const initState = {
    movies: mockData,
    filteredMovies: mockData,
    filter: 0,
  };

  it("should handle MovieActionType.FILTER", () => {
    expect(
      movieReducer(initState, { type: MovieActionType.FILTER, payload: 1980 })
    ).toEqual({
      movies: mockData,
      filteredMovies: [],
      filter: 1980,
    });
  });
});

describe("fetch reducer", () => {
  it("should assign action type to state", () => {
    expect(fetchReducer(undefined, { type: FetchState.LOADING })).toEqual(
      FetchState.LOADING
    );
  });
});
