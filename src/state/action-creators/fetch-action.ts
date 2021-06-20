import { Dispatch } from "react";
import { FetchState, FetchStateAction } from "../../models/fetch-dispatch-action";

export const setFetchState = function (state: FetchState) {
  return (dispatch: Dispatch<FetchStateAction>) => {
    return dispatch({
      type: state
    });
  };
};