import gql from "graphql-tag";

// export const GET_LAUNCHES = gql`
//   query launchList($after: String) {
//     launches(after: $after) {
//       cursor
//       hasMore
//       launches {
//         id
//         isBooked
//         rocket {
//           id
//           name
//         }
//         mission {
//           name
//           missionPatch
//         }
//       }
//     }
//   }
// `;

export const GET_SPECIFIC_ROOM = gql`
  query($pinCode: String!) {
    room(pin: $pinCode) {
      pin
      usernames
      songs {
        title
        url
        likes
        username
        company
      }
    }
  }
`;

export const GET_ROOMS = gql`
  query {
    rooms {
      pin
      usernames
      songs {
        title
        url
        likes
        username
        company
      }
    }
  }
`;
