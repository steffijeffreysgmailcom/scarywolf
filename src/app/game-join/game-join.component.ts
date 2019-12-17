import {Component, Input, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {Character} from '../data-store/character/character.component';
import {Role} from '../data-store/role.component';
import {GameFunction} from '../PublicFunction/game-function.component';
import {Wolf} from '../data-store/character/wolf.component';
import {Witch} from '../data-store/character/witch.component';
import {Hunter} from '../data-store/character/hunter.component';
import {Prophet} from '../data-store/character/prophet.component';
import {Router} from '@angular/router';

@Component({
  selector: 'game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {

  RoomToken = '';

  constructor(private data: DataStore, private router: Router) {
  }

  ngOnInit() {
    // this.data.StoreCharacters('Greg');
  }

  JoinGame() {
    this.data.RoomToken = this.RoomToken;
    this.router.navigateByUrl('/play');
  }
}
