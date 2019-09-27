import {Component, OnInit} from '@angular/core';
import {DataStore, GameInstructionEnum, GameState, GameStateEnum} from '../data-store/data-store.component';
import {Character} from '../data-store/character.component';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  GameInstructionEnum = GameInstructionEnum;
  GameStateEnum = GameStateEnum;
  players: Array<Character>;
  currentTurn = new GameState();

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    console.log('here');
    this.players = this.data.GetAllCharacters();
  }

  SelectPersonToKill(name: String) {
    this.data.GetCharacterByName(name).killCharacter();
  }

  StartGame() {
    const audio = new Audio();
    audio.src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
    audio.load();
    audio.play();
  }

  SwitchTurn() {
    this.currentTurn.NextState();
  }

}
