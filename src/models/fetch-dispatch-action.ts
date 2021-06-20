export enum FetchState {
    LOADING = "loading",
    ERROR = "error",
    SUCCESS = "success"
}

export type FetchStateAction = {
  type: FetchState
}