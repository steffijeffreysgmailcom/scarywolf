import {Character} from './character/character.component';

export class GameState {

  currentNight = 1; // TODO: figure out how to increase currentNight later
  currentState = GameStateEnum.closeEyeTurn; // each step at night
  characterKilledTonight: Character = null;
  characterPoisonedTonight: Character = null;

  constructor(public RoomToken: String) {
  }

  NextState() {
    this.currentState += 1;
    if (GameStateEnum[this.currentState] === undefined) {
      this.currentNight += 1;
      this.currentState = GameStateEnum.closeEyeTurn;
      this.characterKilledTonight = null;
      this.characterPoisonedTonight = null;
    }
  }

  CurrentInstruction() {
    return GameInstructionEnum[GameStateEnum[this.currentState]];
  }

  SetCharacterKilledTonight(characterKilled: Character) {
    this.characterKilledTonight = characterKilled;
  }

  SetCharacterPoisonedTonight(characterKilled: Character) {
    this.characterPoisonedTonight = characterKilled;
  }

}

export enum GameInstructionEnum {
  'closeEyeTurn' = 'Everyone close your eyes',
  'wolvesTurn' = 'Wolves open your eyes',
  'witchTurn' = 'Wolves close your eyes, Witch open your eyes',
  'prophetTurn' = 'Witch close your eyes, Prophet open your eyes',
  'HunterTurn' = 'Prophet close your eyes, Hunter open your eyes'
}

export enum GameStateEnum {
  'closeEyeTurn',
  'wolvesTurn',
  'witchTurn',
  'prophetTurn',
  'HunterTurn'
}
