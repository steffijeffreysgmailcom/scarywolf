import {Role} from '../role.component';
import {Character, CharacterState} from './character.component';

export class Wolf extends Character {

  constructor(public name: String, public role: Role) {
    super(name, role);
  }

  Kill(characterKilled: Character) {
    if (this.state === CharacterState.alive) {
      characterKilled.KillThisCharacter();
    }
  }
}
