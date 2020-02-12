import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";

type Actions = { type: string; sessionName: string };

export default function sessionNameReducer(
  sessionNameState = initialState.sessionName,
  action: Actions
) {
  switch (action.type) {
    case types.SET_SESSION_NAME:
      return action.sessionName;
    default:
      return sessionNameState;
  }
}
