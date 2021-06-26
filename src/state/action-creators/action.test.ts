import { AnyAction } from 'redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FetchState } from '../../models/fetch-dispatch-action';
import { MovieState } from '../../models/movie-state';
import { setFetchState } from './fetch-action';
import fetchReducer from '../reducers/fetch-reducer';
import { setMovies } from './movie-action';

type StoreState = {
    moviesState: MovieState;
    fetchState: FetchState;
}

const middlewares = [thunk];
const mockStore = configureMockStore<StoreState>(middlewares);

let store: MockStoreEnhanced<StoreState>;
beforeEach(() => {
    store = mockStore({
        moviesState: {movies: [], filteredMovies: [], filter: 0},
        fetchState: FetchState.SUCCESS
    })
})

describe('fetch actions', () => {
    it('should dispatch correct type', async () => {
        await store.dispatch(setFetchState(FetchState.ERROR) as any);
        expect(store.getActions()).toContainEqual({type: FetchState.ERROR});
    })
})