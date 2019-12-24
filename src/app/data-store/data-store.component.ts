import {Injectable} from '@angular/core';
import {Character} from './character/character.component';
import {Role} from './role.component';
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
      client.mutate({
        mutation: createScaryWolf,
        variables: {
          input: {
            GameState: JSON.stringify(new GameState(this.RoomToken)),
            Token: this.RoomToken,
            Characters: JSON.stringify(this.characters)
          }
        }
      }).then(data => callback(data))
        .catch(error => console.error('error', error));
    });
  }

  UpdateRoom(gameState: GameState, characters: Character[], callback) {
    this.characters = characters;
    this.appsync.hc().then(client => {
      client.mutate({
        mutation: updateScaryWolf,
        variables: {
          input: {
            Token: this.RoomToken,
            GameState: JSON.stringify(gameState),
            Characters: JSON.stringify(this.characters)
          }
        }
      }).then(data => callback(data))
        .catch(error => console.error('error', error));
    });
  }

  GetRoom(callback) {
    this.appsync.hc().then(client => {
      const observable = client.watchQuery({
        query: getScaryWolf,
        variables: {Token: this.RoomToken}
      });
      observable.subscribe(({data}) => {
        if (!data) {
          console.log('getAllUsers - no data');
        } else {
          console.log(data);
          callback(
            this.ConvertJsonToCharacters(data.getScaryWolf.Characters),
            this.ConvertJsonToGameState(data.getScaryWolf.GameState)
          );
        }
      });
    });
  }

  ConvertJsonToCharacters(json) {
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

  ConvertJsonToGameState(json) {
    const obj = JSON.parse(json);
    const gameState = new GameState(obj.RoomToken);
    gameState.currentNight = obj.currentNight;
    gameState.currentState = obj.currentState;
    gameState.characterKilledTonight = obj.characterKilledTonight;
    gameState.characterPoisonedTonight = obj.characterPoisonedTonight;

    return gameState;
  }

  GetCharacterByName(name: String): Character {
    let character: Character = null;
    this.characters.forEach((chara) => {
      if (chara.name === name) {
        character = chara;
      }
    });
    return character;
  }

  GetCharactersByRole(role: Role): Array<Character> {
    const characters = [];
    this.characters.forEach((chara) => {
      if (chara.role === role) {
        characters.push(chara);
      }
    });
    return characters;
  }
}
