import {Injectable} from '@angular/core';
import {Character} from './character/character.component';
import {Role} from './role.component';
import { AppsyncService } from './appsync.service';
import { GetScaryWolfQuery } from './API'
import { getScaryWolf } from './graphql/queries'
//import { listScaryWolves } from './graphql/queries/listall';

@Injectable()
export class DataStore {

  characters: Array<Character> = [];

  constructor(private appsync: AppsyncService) {}

  StoreCharacter(character: Character) {
    this.characters.push(character);
    console.log("smile");

    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: getScaryWolf,
        variables: { Token: "guykg" },
        fetchPolicy: 'cache-and-network'
      });

      observable.subscribe(({data}) => {
        if (!data) {
          return console.log('getAllUsers - no data');
        }
        console.log(data)
      });
    });
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
