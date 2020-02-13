import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

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
