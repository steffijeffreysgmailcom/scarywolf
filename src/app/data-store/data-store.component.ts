import {Injectable} from '@angular/core';
import {Character} from './character/character.component';
import {Role} from './role.component';

@Injectable()
export class DataStore {

  characters: Array<Character> = [];

  StoreCharacter(character: Character) {
    this.characters.push(character);
  }

  GetAllCharacters(): Array<Character> {
    return this.characters;
  }

  GetCharacterByName(name: String): Character {
    let character: Character = null;
    this.characters.forEach((chara) => {
      // TODO: comparing string using ===?
      if (chara.name === name) {
        character = chara;
      }
    });
    return character;
  }

  GetCharactersByRole(role: Role): Array<Character> {
    const characters = [];
    this.characters.forEach((chara) => {
      // TODO: comparing string using ===?
      if (chara.role === role) {
        characters.push(chara);
      }
    });
    return characters;
  }
}
