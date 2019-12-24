import {Component} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {Router} from '@angular/router';

@Component({
  selector: 'game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent {

  RoomToken = '';

  constructor(private data: DataStore, private router: Router) {
  }

  JoinGame() {
    this.data.RoomToken = this.RoomToken;
    this.router.navigateByUrl('/play');
  }
}
