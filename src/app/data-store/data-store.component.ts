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
  constructor(public statename: GameStateEnum, public instruction: String) {
  }
}

export class GameStates {
  public currentState = 0;
  public states = [
    new GameState(GameStateEnum.closeEyeTurn, 'Everyone close your eyes'),
    new GameState(GameStateEnum.wolvesTurn, 'Wolves open your eyes'),
    new GameState(GameStateEnum.witchTurn, 'blah blah'),
    new GameState(GameStateEnum.prophetTurn, 'blah blah'),
    new GameState(GameStateEnum.HunterTurn, 'blah blah'),
  ];

  NextState() {
    this.currentState += 1;
  }

  CurrentState(): GameState {
    return this.states[this.currentState];
  }
}

export enum GameStateEnum {
  closeEyeTurn,
  wolvesTurn,
  witchTurn,
  prophetTurn,
  HunterTurn
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
