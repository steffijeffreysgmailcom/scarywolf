/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateScaryWolfInput = {
  GameState?: string | null,
  Token: string,
};

export type UpdateScaryWolfInput = {
  GameState?: string | null,
  Token: string,
};

export type CreateScaryWolfMutationVariables = {
  input: CreateScaryWolfInput,
};

export type CreateScaryWolfMutation = {
  createScaryWolf:  {
    __typename: "ScaryWolf",
    GameState: string | null,
    Token: string,
  } | null,
};

export type UpdateScaryWolfMutationVariables = {
  input: UpdateScaryWolfInput,
};

export type UpdateScaryWolfMutation = {
  updateScaryWolf:  {
    __typename: "ScaryWolf",
    GameState: string | null,
    Token: string,
  } | null,
};

export type GetScaryWolfQueryVariables = {
  Token: string,
};

export type GetScaryWolfQuery = {
  getScaryWolf:  {
    __typename: "ScaryWolf",
    GameState: string | null,
    Token: string,
  } | null,
};

export type OnCreateScaryWolfSubscriptionVariables = {
  GameState?: string | null,
  Token?: string | null,
};

export type OnCreateScaryWolfSubscription = {
  onCreateScaryWolf:  {
    __typename: "ScaryWolf",
    GameState: string | null,
    Token: string,
  } | null,
};

export type OnUpdateScaryWolfSubscriptionVariables = {
  GameState?: string | null,
  Token?: string | null,
};

export type OnUpdateScaryWolfSubscription = {
  onUpdateScaryWolf:  {
    __typename: "ScaryWolf",
    GameState: string | null,
    Token: string,
  } | null,
};
