import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import * as stubData from "../../apiConnection/stubData";

export function loadUsernamesSuccess(usernames: string[]) {
  return { type: types.LOAD_USERNAMES_SUCCESS, usernames: usernames };
}

export function setSessionName(sessionName: string) {
  return { type: types.SET_SESSION_NAME, sessionName: sessionName };
}

export function addUser() {
  return function(dispatch: any) {
    //temps solution
    //making optimistic call that we will get a name fast
    return setSessionName("UserX");
  };
}
