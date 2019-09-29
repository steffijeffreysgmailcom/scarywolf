import {Character} from './character/character.component';

export class GameState {

  currentNight = 1; // TODO: figure out how to increase currentNight later
  currentState = GameStateEnum.closeEyeTurn;
  characterKilledTonight: Character = null;
  characterPoisonedTonight: Character = null;

  NextState() {
    this.currentState += 1;
  }

  CurrentInstruction() {
    return GameInstructionEnum[GameStateEnum[this.currentState]];
  }

  SetCharacterKilledTonight(characterKilled: Character) {
    this.characterKilledTonight = characterKilled;
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
