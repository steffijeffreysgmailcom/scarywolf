import { Component } from '@angular/core';


@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent {

  share() {
    window.alert('The product has been shared!');
  }
}
