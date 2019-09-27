import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export enum CharacterState {
  dead,
  alive,
}

export enum Role {
  Villager,
  Wolf,
  Witch,
  Prophet,
  Hunter
}

export class Character {
  state: CharacterState = CharacterState.alive;

  constructor(public name: String, public role: Role) {
  }

  killCharacter() {
    this.state = CharacterState.dead;
  }
}

export class Witch extends Character {

  constructor(public name: String, public role: Role, public RessuranceWitchRule: String, bothRessurgancePoisin: boolean) {
    super(name, role);
  }
}

export class GameState {

  currentState = GameStateEnum.closeEyeTurn;

  NextState() {
    this.currentState += 1;
  }

  CurrentState() {
    return this.currentState;
  }

  CurrentInstruction() {
    return GameInstructionEnum[GameStateEnum[this.currentState]];
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

@Injectable()
export class DataStore {

  characters: Array<Character> = [];

  StoreCharacter(character: Character) {
    this.characters.push(character);
    console.log('create');
  }

  GetAllCharacters(): Array<Character> {
    return this.characters;
  }

  GetCharacterByName(name: String): Character {
    var character: Character = null;
    this.characters.forEach((chara) => {
      // TODO: comparing string using ===?
      if (chara.name === name) {
        character = chara;
      }
    });
    return character;
  }

}
