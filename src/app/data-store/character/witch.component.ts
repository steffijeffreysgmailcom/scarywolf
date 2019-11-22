import {RescueWitchRules, Role} from '../role.component';
import {Character, CharacterState} from './character.component';

export class Witch extends Character {

  haveRescue = true;
  havePoison = true;
  nightUsedRescue = null;
  nightUsedPoison = null;

  constructor(public name: String, public role: Role, public rescueWitchRule: RescueWitchRules, public bothRescuePoison: boolean) {
    super(name, role);
  }

  CanRescue(night: Number, characterKilled: Character) {
    if (!this.haveRescue) {
      return false;
    }
    if (!this.bothRescuePoison && this.nightUsedPoison === night) {
      return false;
    }
    switch (this.rescueWitchRule) {
      case RescueWitchRules.canNotRescue:
        return characterKilled !== this;
      case RescueWitchRules.canRescue:
        return true;
      case RescueWitchRules.canRescueOnFirstNight:
        return characterKilled !== this || (night === 1);
    }
    return false;
  }

  Rescue(characterKilled: Character, night: Number) {
    if (this.state === CharacterState.alive) {
      characterKilled.RescueThisCharacter();
      this.nightUsedRescue = night;
      this.haveRescue = false;
    }
  }

  CanPoison(night: Number) {
    if (!this.havePoison) {
      return false;
    }
    if (!this.bothRescuePoison && this.nightUsedRescue === night) {
      return false;
    }
    return true;
  }

  Poison(characterKilled: Character, night: Number) {
    characterKilled.KillThisCharacter();
    this.nightUsedPoison = night;
    this.havePoison = false;
  }
}
