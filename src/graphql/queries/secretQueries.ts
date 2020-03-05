import gql from 'graphql-tag';

export const SECRETS_QUERY = gql`
    query GetSecrets {
      secrets @client {
        id @client
        name @client
        password @client
      } 
    }
`;