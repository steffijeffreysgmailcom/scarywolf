import { Component, OnInit } from '@angular/core';
import { DataStore } from "../data-store/data-store.component";


@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  player:String = "No idea";
  constructor(private data: DataStore) { }
  ngOnInit() {
    this.player = this.data.GetCharacter();
  }

  StartGame() {
    var audio = new Audio();
    audio.src = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3";
    audio.load();
    audio.play();
  }

}
