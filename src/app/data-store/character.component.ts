import {Component} from '@angular/core';
import {Role} from './data-store.component';

export class Character {

  state: CharacterState = CharacterState.alive;

  constructor(public name: String, public role: Role) {
  }

  killCharacter() {
    this.state = CharacterState.dead;
  }
}

export enum CharacterState {
  dead,
  alive,
}

export class Witch extends Character {

  constructor(public name: String, public role: Role, public RescueWitchRule: String, bothRescuePoison: boolean) {
    super(name, role);
  }
}
