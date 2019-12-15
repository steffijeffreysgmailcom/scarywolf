// tslint:disable
// this is an auto generated file. This will be overwritten

import gql from 'graphql-tag';

export const onCreateScaryWolf = gql`subscription OnCreateScaryWolf($GameState: AWSJSON, $Token: String) {
  onCreateScaryWolf(GameState: $GameState, Token: $Token) {
    GameState
    Token
    Characters
  }
}
`;
export const onUpdateScaryWolf =gql `subscription OnUpdateScaryWolf($GameState: AWSJSON, $Token: String) {
  onUpdateScaryWolf(GameState: $GameState, Token: $Token) {
    GameState
    Token
    Characters
  }
}
`;
