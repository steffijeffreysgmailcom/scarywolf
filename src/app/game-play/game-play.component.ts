import {Component, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {GameState, GameStateEnum} from '../data-store/gameState.component';
import {Character, CharacterState} from '../data-store/character/character.component';
import {Witch} from '../data-store/character/witch.component';
import {Role} from '../data-store/role.component';
import {Wolf} from '../data-store/character/wolf.component';
import {Prophet} from '../data-store/character/prophet.component';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  GameStateEnum = GameStateEnum;
  CharacterState = CharacterState;

  players: Array<Character>;
  currentTurn = new GameState();
  witchSelectPoison = false;
  prophetSelectCharacter = false;
  characterExaminateResult = null;

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    console.log('here');
    this.players = this.data.GetAllCharacters();
  }

  KillCharacterByName(name: String) {
    const characterKilled = this.data.GetCharacterByName(name);
    this.GetWolves()[0].Kill(characterKilled);
    this.currentTurn.SetCharacterKilledTonight(characterKilled);
  }

  RescueCharacterKilledTonight() {
    const witch = this.GetWitch();
    if (witch.CanRescue(this.currentTurn.currentNight, this.currentTurn.characterKilledTonight)) {
      witch.Rescue(this.currentTurn.characterKilledTonight, this.currentTurn.currentNight);
    }
  }

  PoisonCharacterByName(name: String) {
    const characterKilled = this.data.GetCharacterByName(name);
    const witch = this.GetWitch();
    const tonight = this.currentTurn.currentNight;
    if (witch.CanPoison(tonight)) {
      witch.Poison(characterKilled, tonight);
    }
    this.currentTurn.SetCharacterPoisonedTonight(characterKilled);
  }

  ExaminateCharacterByName(name: String) {
    const character = this.data.GetCharacterByName(name);
    const prophet = this.GetProphet();
    if (prophet.CanExaminate()) {
      this.characterExaminateResult = prophet.Examinate(character);
    }
  }

  SwitchWitchTurn() {
    const witch = this.GetWitch();
    const tonight = this.currentTurn.currentNight;
    console.log(witch.CanPoison(tonight));
    console.log(witch.CanRescue(tonight, this.currentTurn.characterKilledTonight));

    if (!witch.CanPoison(tonight) && !witch.CanRescue(tonight, this.currentTurn.characterKilledTonight)) {

      this.SwitchTurn();
      console.log('hi');
    }
  }

  StartGame() {
    const audio = new Audio();
    audio.src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
    // audio.load();
    // audio.play();
  }

  SwitchTurn() {
    this.currentTurn.NextState();
  }

  CanDisplayThisCharacter(character: Character) {
    const isAlive = character.state === CharacterState.alive;
    const isKilledTonight = character === this.currentTurn.characterKilledTonight;
    const isPoisonedTonight = character === this.currentTurn.characterPoisonedTonight;
    return isAlive || isKilledTonight || isPoisonedTonight;
  }

  GetWitch() {
    return this.data.GetCharactersByRole(Role.Witch)[0] as Witch;
  }

  GetWolves() {
    return this.data.GetCharactersByRole(Role.Wolf) as Array<Wolf>;
  }

  GetProphet() {
    return this.data.GetCharactersByRole(Role.Prophet)[0] as Prophet;
  }


  // TODO: remove later
  test() {
    console.log(this.players);
  }
}
