import {RescueWitchRules, Role} from './role.component';

export class Character {

  state: CharacterState = CharacterState.alive;

  constructor(public name: String, public role: Role) {
  }

  killThisCharacter() {
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

export class Witch extends Character {

  haveRescue = true;
  havePoison = true;

  constructor(public name: String, public role: Role, public rescueWitchRule: RescueWitchRules, bothRescuePoison: boolean) {
    super(name, role);
  }

  CanRescue(night: Number, characterKilled: Character) {
    switch (this.rescueWitchRule) {
      case RescueWitchRules.canNotRescue:
        return this.haveRescue && characterKilled !== this;
      case RescueWitchRules.canRescue:
        return this.haveRescue;
      case RescueWitchRules.canRescueOnFirstNight:
        return this.haveRescue && (characterKilled !== this || (night === 1));
    }

    return false;
  }

  Rescue(characterKilled: Character) {
    characterKilled.RescueThisCharacter();
  }
}
