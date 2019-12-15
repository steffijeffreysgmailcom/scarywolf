import {Injectable} from '@angular/core';
import {Character} from './character/character.component';
import {Role} from './role.component';
import {AppsyncService} from './appsync.service';
import {GetScaryWolfQuery} from './API';
import {getScaryWolf} from './graphql/queries';
import {createScaryWolf} from './graphql/mutations';
import {GameState} from './gameState.component';

//import { listScaryWolves } from './graphql/queries/listall';

@Injectable()
export class DataStore {

  characters: Character[];

  constructor(private appsync: AppsyncService) {
  }

  StoreCharacters(RoomToken: string, characters: Character[]) {
    this.characters = characters;
    // console.log({GameState: 'hi',Token: RoomToken, Characters: this.characters});

    this.appsync.hc().then(client => {
      const observable = client.mutate({
        mutation: createScaryWolf,
        variables: {
          input: {
            GameState: JSON.stringify(new GameState(RoomToken)),
            Token: RoomToken,
            Characters: JSON.stringify(this.characters)
          }
        },

      }).then(data => console.log('success', data))
        .catch(error => console.error('error', error));
    });

    //
    // this.appsync.hc().then(client => {
    //   const observable = client.watchQuery({
    //     query: getScaryWolf,
    //     variables: {Token: 'guykg'},
    //     fetchPolicy: 'cache-and-network'
    //   });
    //
    //   observable.subscribe(({data}) => {
    //     if (!data) {
    //       return console.log('getAllUsers - no data');
    //     }
    //     console.log(data);
    //   });
    // });
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
