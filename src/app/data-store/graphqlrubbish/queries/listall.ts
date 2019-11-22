 
import gql from 'graphql-tag';

export default gql`
query listScaryWolves($token: String!) {
    getScaryWolf(Token: $token) {
      Token
      GameState
    }
  }`;

   