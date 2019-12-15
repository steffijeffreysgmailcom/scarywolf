// tslint:disable
// this is an auto generated file. This will be overwritten

import gql from 'graphql-tag';

export const createScaryWolf = gql `mutation CreateScaryWolf($input: CreateScaryWolfInput!) {
  createScaryWolf(input: $input) {
    GameState
    Token
    Characters
  }
}
`;
export const updateScaryWolf =gql `mutation UpdateScaryWolf($input: UpdateScaryWolfInput!) {
  updateScaryWolf(input: $input) {
    GameState
    Token
    Characters
  }
}
`;
