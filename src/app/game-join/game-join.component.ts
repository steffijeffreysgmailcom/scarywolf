import {Component, Input, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {Character} from '../data-store/character/character.component';
import {Role} from '../data-store/role.component';

@Component({
  selector: 'game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {

  RoomToken = '';

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    // this.data.StoreCharacter('Greg');
  }
}
