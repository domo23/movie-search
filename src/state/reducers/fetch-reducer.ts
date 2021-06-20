import {
  FetchState,
  FetchStateAction,
} from "../../models/fetch-dispatch-action";

const defaultState = FetchState.SUCCESS;

const reducer = function (
  state: FetchState = defaultState,
  action: FetchStateAction
) {
  switch (action.type) {
    case FetchState.ERROR:
    case FetchState.LOADING:
    case FetchState.SUCCESS:
      state = action.type;
  }

  return state;
};

export default reducer;
