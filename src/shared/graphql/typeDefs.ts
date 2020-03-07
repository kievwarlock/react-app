import gql from "graphql-tag";

export const typeDefs = gql`
  type Secret {
    id: ID
    name: String
    password: String
  }   
`;