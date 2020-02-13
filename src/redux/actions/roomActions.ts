import * as types from "./actionTypes";
import { Room } from "../../components/common/objectTypes/room";
import { Brand } from "components/common/objectTypes/song";
import * as stubData from "../../apiConnection/stubData";
import * as usernameActions from "./usernameActions";

import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import * as apiQueries from "../../apiConnection/queries";
import gql from "graphql-tag";
// import gql from "graphql-tag";

// export function createRoomSuccess(room: Room) {
//   return { type: types.CREATE_ROOM_SUCCESS, room: room };
// }

const HOST: string = "Host";

interface GqlResult {
  data: any;
  loading: any;
  error: any;
}
export function loadRoomSuccess(room: Room) {
  return { type: types.LOAD_ROOM_SUCCESS, room: room };
}

export function createRoom() {
  // do some thunk stuff
  //temp solution
  return function(dispatch: any) {
    dispatch(usernameActions.setSessionName(HOST));

    // const [login, { data }] = useMutation(LOGIN_USER);

    dispatch(loadRoomSuccess(stubData.stubCreateRoom));
  };
}

export function loadRoom(client: any, pin: string) {
  return function(dispatch: any) {
    dispatch(usernameActions.addUser());
    console.log("past Thunk dispatch ", pin);

    // const client = useApolloClient();

    return client
      .query({
        query: apiQueries.GET_SPECIFIC_ROOM,
        variables: { pinCode: pin }
      })
      .then((result: GqlResult) => {
        //todo remove later
        console.log(result.data.room);
        dispatch(loadRoomSuccess(result.data.room));
      })
      .catch((error: any) => console.log(error));
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
