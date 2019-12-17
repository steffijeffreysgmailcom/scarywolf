import {Injectable} from '@angular/core';
import {Character} from './character/character.component';
import {RescueWitchRules, Role} from './role.component';
import {AppsyncService} from './appsync.service';
import {getScaryWolf} from './graphql/queries';
import {createScaryWolf, updateScaryWolf} from './graphql/mutations';
import {GameState} from './gameState.component';
import {Wolf} from './character/wolf.component';
import {Witch} from './character/witch.component';
import {Prophet} from './character/prophet.component';
import {Hunter} from './character/hunter.component';


@Injectable()
export class DataStore {

  characters: Character[];
  RoomToken: string;

  constructor(private appsync: AppsyncService) {
  }

  CreateRoom(characters: Character[], callback) {
    this.characters = characters;

    this.appsync.hc().then(client => {
      const observable = client.mutate({
        mutation: createScaryWolf,
        variables: {
          input: {
            GameState: JSON.stringify(new GameState(this.RoomToken)),
            Token: this.RoomToken,
            Characters: JSON.stringify(this.characters)
          }
        },

      }).then(data => callback(data))
        .catch(error => console.error('error', error));
    });
  }

  UpdateRoom(gameState: GameState, characters: Character[], callback) {
    this.characters = characters;

    this.appsync.hc().then(client => {
      const observable = client.mutate({
        mutation: updateScaryWolf,
        variables: {
          input: {
            Token: this.RoomToken,
            GameState: JSON.stringify(gameState),
            Characters: JSON.stringify(this.characters)
          }
        },

      }).then(data => callback(data))
        .catch(error => console.error('error', error));
    });
  }

  GetAll(callback) {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: getScaryWolf,
        variables: {Token: this.RoomToken}
      });

      observable.subscribe(({data}) => {
        if (!data) {
          console.log('getAllUsers - no data');
        } else {
          console.log(data)
          callback(this.ConvertJsonToCharacter(data.getScaryWolf.Characters), JSON.parse(data.getScaryWolf.GameState))
          ;
        }
      });
    });
  }

  ConvertJsonToCharacter(json) {
    const charactersArray = new Array<Character>();
    for (const character of JSON.parse(json)) {
      let char = null;
      switch (character.role) {
        case Role.Villager:
          char = new Character(character.name, character.role);
          break;
        case Role.Wolf:
          char = new Wolf(character.name, character.role);
          break;
        case Role.Witch:
          char = new Witch(character.name, character.role, character.rescueWitchRule, character.bothRescuePoison);
          char.haveRescue = character.haveRescue;
          char.havePoison = character.havePoison;
          char.nightUsedRescue = character.nightUsedRescue;
          char.nightUsedPoison = character.nightUsedPoison;
          break;
        case Role.Prophet:
          char = new Prophet(character.name, character.role);
          break;
        case Role.Hunter:
          char = new Hunter(character.name, character.role);
          break;
      }
      char.state = character.state;
      charactersArray.push(char);
    }
    return charactersArray;
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
