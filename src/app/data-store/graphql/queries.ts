// tslint:disable
// this is an auto generated file. This will be overwritten

import gql from 'graphql-tag';

export const getScaryWolf = gql`query GetScaryWolf($Token: String!) {
  getScaryWolf(Token: $Token) {
    GameState
    Token
  }
}
`;

// export default gql`
// query listScaryWolves($token: String!) {
//     getScaryWolf(Token: $token) {
//       Token
//       GameState
//     }
//   }`;

   