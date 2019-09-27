import {RescueWitchRules, Role} from './role.component';

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

  constructor(public name: String, public role: Role, public RescueWitchRule: RescueWitchRules, bothRescuePoison: boolean) {
    super(name, role);
  }
}
