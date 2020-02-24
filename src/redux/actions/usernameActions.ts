import * as types from "./actionTypes";

// not used for now, might not be needed
export function loadUsernamesSuccess(usernames: string[]) {
  return { type: types.LOAD_USERNAMES_SUCCESS, usernames: usernames };
}
export function setToLiveUsernames(usernames: string[]) {
  return { type: types.SET_TO_LIVE_USERNAMES, usernames };
}

export function setSessionName(sessionName: string) {
  return { type: types.SET_SESSION_NAME, sessionName: sessionName };
}

//not used for now might not be needed
export function addUser() {
  return function(dispatch: any) {
    //temps solution
    //making optimistic call that we will get a name fast
    return setSessionName("UserX");
  };
}
