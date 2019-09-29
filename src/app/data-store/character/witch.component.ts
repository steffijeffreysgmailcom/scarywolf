import {RescueWitchRules, Role} from '../role.component';
import {Character, CharacterState} from './character.component';

export class Witch extends Character {

  haveRescue = true;
  havePoison = true;

  constructor(public name: String, public role: Role, public rescueWitchRule: RescueWitchRules, public bothRescuePoison: boolean) {
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
    if (this.state === CharacterState.alive) {
      characterKilled.RescueThisCharacter();
    }
  }
}
