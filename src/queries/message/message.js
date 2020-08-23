import gql from "graphql-tag";

const CREATE_MESSAGE = gql`
  mutation CreateMESSAGE($name: String!, $email: String!, $sujet: String!, $message: String!) {
    createMESSAGE(name: $text, email: $email, sujet: $sujet, message: $message)
  }
`;

export default CREATE_MESSAGE;
