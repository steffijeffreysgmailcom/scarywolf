import {Component, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {GameState, GameStateEnum} from '../data-store/gameState.component';
import {Character, CharacterState} from '../data-store/character/character.component';
import {Witch} from '../data-store/character/witch.component';
import {Role} from '../data-store/role.component';
import {Wolf} from '../data-store/character/wolf.component';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  GameStateEnum = GameStateEnum;

  players: Array<Character>;
  currentTurn = new GameState();

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    console.log('here');
    this.players = this.data.GetAllCharacters();
  }

  KillCharacterByName(name: String) {
    const characterKilled = this.data.GetCharacterByName(name);
    const wolf = this.GetWolves()[0].Kill(characterKilled);
    this.currentTurn.SetCharacterKilledTonight(characterKilled);
  }

  RescueCharacterKilledTonight() {
    const witch = this.GetWitch();
    if (witch.CanRescue(this.currentTurn.currentNight, this.currentTurn.characterKilledTonight)) {
      witch.Rescue(this.currentTurn.characterKilledTonight);
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

  GetWitch() {
    return this.data.GetCharactersByRole(Role.Witch)[0] as Witch;
  }

  GetWolves() {
    return this.data.GetCharactersByRole(Role.Wolf) as Array<Wolf>;
  }


  // TODO: remove later
  test() {
    console.log(this.players);
  }
}
