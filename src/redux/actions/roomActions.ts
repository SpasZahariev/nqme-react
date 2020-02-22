import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import { Brand, Song } from "components/common/objectTypes/song";
import * as stubData from "../../apiConnection/stubData";
import * as usernameActions from "./usernameActions";
import * as apiStatusActions from "./apiStatusActions";

import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import * as apiQueries from "../../apiConnection/queries";
import * as apiMutations from "../../apiConnection/mutations";
import gql from "graphql-tag";
// import gql from "graphql-tag";

// export function createRoomSuccess(room: Room) {
//   return { type: types.CREATE_ROOM_SUCCESS, room: room };
// }

const HOST: string = "Host";

interface QueryResult {
  data: any;
  loading: any;
  error: any;
}

export function loadRoomSuccess(room: Room) {
  return { type: types.LOAD_ROOM_SUCCESS, room: room };
}

export function addSongOptimistic(song: Song) {
  return { type: types.ADD_SONG_OPTIMISTIC, song: song };
}

export function clearSearchResults() {
  return { type: types.CLEAR_SEARCH_RESULTS };
}

export function createRoom(client: any) {
  // do some thunk stuff
  return function(dispatch: any) {
    dispatch(apiStatusActions.beginApiCall());
    dispatch(usernameActions.setSessionName(HOST));
    //start api loading now
    return client
      .mutate({
        mutation: apiMutations.PUT_ROOM
      })
      .then((result: any) => {
        console.log("room created");
        console.log(result);
        dispatch(loadRoomSuccess(result.data.putRoom.room));
      })
      .catch((error: any) => {
        dispatch(apiStatusActions.apiCallError());
        throw error;
      });
  };
}

export function loadRoom(client: any, pinCode: string) {
  return function(dispatch: any) {
    // const client = useApolloClient();

    dispatch(apiStatusActions.beginApiCall());
    // console.log(wrappedPin);
    return client
      .query({
        query: apiQueries.GET_SPECIFIC_ROOM,
        variables: { pinCode }
      })
      .then((result: QueryResult) => {
        //todo remove later
        console.log("here is my result", result);
        console.log(result.data.room);
        const room = result.data.room;
        dispatch(
          usernameActions.setSessionName(
            room.usernames[room.usernames.length - 1]
          )
        );
        dispatch(loadRoomSuccess(room));
      })
      .catch((error: any) => {
        dispatch(apiStatusActions.apiCallError());
        throw error;
      });
  };
}

export function addSongToQueue(client: any, pin: String, song: Song) {
  return function(dispatch: any) {
    dispatch(addSongOptimistic(song));
    dispatch(clearSearchResults());
    const { title, url, username, company } = song;
    return client.mutate({
      mutation: apiMutations.PUT_SONG,
      variables: { pin, title, url, username, company }
    });
  };
}

// client
//   .query({
//     query: apiQueries.GET_ROOMS
//   })
//   .then(result => console.log(result));

// client
//   .query({
//     query: gql`
//       query {
//         room(pin: "1111") {
//           pin
//           usernames
//           songs {
//             title
//             url
//             likes
//             company
//           }
//         }
//       }
//     `
//   })
//   .then((result: any) => console.log(result));

// // const { loading, error, data } = useQuery(apiQueries.GET_SPECIFIC_ROOM, {
// // variables: pin
// // }).then(result => console.log(result));;

// return dispatch(loadRoomSuccess(stubData.stubCreateRoom));
