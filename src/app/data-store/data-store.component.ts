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
    // this.characters.forEach(function (character) {
    //   // TODO: comparing string using ===?
    //   if (character.name === name) {
    //     return character;
    //   }
    // });

    for (var i = 0; i < this.characters.length; i++) {
      // TODO: comparing string using ===?
      if (this.characters[i].name === name) {
        return this.characters[i];
      }
    }
    return null;
  }

}
