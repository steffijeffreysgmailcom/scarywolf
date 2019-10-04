import {Role} from '../role.component';

export class Character {

  state: CharacterState = CharacterState.alive;

  constructor(public name: String, public role: Role) {
  }

  KillThisCharacter() {
    this.state = CharacterState.dead;
  }

  RescueThisCharacter() {
    this.state = CharacterState.alive;
  }
}

export enum CharacterState {
  dead,
  alive,
}
