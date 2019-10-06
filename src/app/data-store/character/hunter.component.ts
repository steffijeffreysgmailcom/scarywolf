import {Role} from '../role.component';
import {Character, CharacterState} from './character.component';

export class Hunter extends Character {

  constructor(public name: String, public role: Role) {
    super(name, role);
  }

  Kill(characterKilled: Character) {
    characterKilled.KillThisCharacter();
  }
}
