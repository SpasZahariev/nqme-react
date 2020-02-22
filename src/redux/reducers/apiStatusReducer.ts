import * as types from "../actions/actionTypes";
import initialState from "./initialState";

type Actions = { type: string; object: any };

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action: Actions
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}

function actionTypeEndsInSuccess(type: string) {
  return type.substring(type.length - 8) === "_SUCCESS";
}
