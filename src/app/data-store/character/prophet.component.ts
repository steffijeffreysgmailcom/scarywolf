import {Role, RoleGoodBad} from '../role.component';
import {Character, CharacterState} from './character.component';

export class Prophet extends Character {

  constructor(public name: String, public role: Role) {
    super(name, role);
  }

  Examinate(character: Character): RoleGoodBad {
    switch (character.role) {
      case Role.Wolf:
        return RoleGoodBad.Bad;
      default:
        return RoleGoodBad.Good;
    }
  }

  CanExaminate() {
    return this.state === CharacterState.alive;
  }
}
