import * as types from "../actions/actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import initialState from "./initialState";

type Actions = { type: string; isMaster: Boolean };

export default function isMasterReducer(
  isMasterState = initialState.isMaster,
  action: Actions
) {
  switch (action.type) {
    case types.IS_MASTER:
      return action.isMaster;
    default:
      return isMasterState;
  }
}
