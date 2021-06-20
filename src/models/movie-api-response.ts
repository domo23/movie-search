import {MovieData} from './movie-data'

export type MovieApiResponse = {
    count: number;
    next: any;
    previous: any;
    results: MovieData[];
};