import {Component, OnInit} from '@angular/core';
import {Character, DataStore} from '../data-store/data-store.component';


@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  players: Array<Character>;
  instruction = 'Everyone close your eyes; Wolves open your eyes';

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    this.players = this.data.GetAllCharacters();

    // test
    this.players[0].name = 'Chris';
    this.SelectPersonToKill('Chris');
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

}
