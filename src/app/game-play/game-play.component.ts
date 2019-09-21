import {Component, OnInit} from '@angular/core';
import {Character, DataStore, GameStateEnum, GameStates, GameState} from '../data-store/data-store.component';


@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  public GameStateEnum = GameStateEnum;
  players: Array<Character>;
  currentTurn: GameStates;
  currentState: GameState;

  constructor(private data: DataStore) {
    this.currentTurn = new GameStates();
    this.currentState = this.currentTurn.CurrentState();
    console.log(this.currentTurn);
    console.log(this.currentState);
  }

  ngOnInit() {
    console.log('here')
    this.players = this.data.GetAllCharacters();
  }

  SelectPersonToKill(name: String) {
    this.data.GetCharacterByName(name).killCharacter();
  }

  StartGame() {
    var audio = new Audio();
    audio.src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
    audio.load();
    audio.play();
  }

  SwitchTurn() {
    this.currentTurn.NextState();
    this.currentState = this.currentTurn.CurrentState();
  }

}
