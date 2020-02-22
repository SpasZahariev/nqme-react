import gql from "graphql-tag";

// export const LOGIN_USER = gql`
//   mutation login($email: String!) {
//     login(email: $email)
//   }
// `;

export const PUT_ROOM = gql`
  mutation {
    putRoom {
      room {
        usernames
        pin
        songs {
          title
          url
          likes
          company
        }
      }
    }
  }
`;

export const PUT_SONG = gql`
  mutation(
    $pin: String!
    $title: String!
    $url: String!
    $username: String!
    $company: String!
  ) {
    putSong(
      pin: $pin
      title: $title
      url: $url
      username: $username
      company: $company
    ) {
      songs {
        url
      }
    }
  }
`;

export const LIKE_SONG = gql`
  mutation($pin: String!, $title: String!) {
    likeSong(pin: $pin, title: $title) {
      songs {
        url
      }
    }
  }
`;
