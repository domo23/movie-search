import { MovieData } from "./movie-data";

export type MovieState = {
    movies: MovieData[],
    filteredMovies: MovieData[],
    filter: Number
}