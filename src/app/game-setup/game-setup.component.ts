import {Component, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';


@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  SelectedWitch: boolean = false;
  SelectedProphet: boolean = false;
  SelectedHunter: boolean = false;
  WolvesCounter: number = 0;
  VillagerCounter: number = 0;
  canRessuranceHerself = false;

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    this.data.StoreCharacter('Greg');
  }

  SelectCharacter(character: string, selected: boolean) {
    switch (character) {
      case 'witch':
        this.SelectedWitch = selected;
        break;
      case 'prophet':
        this.SelectedProphet = selected;
        break;
      case 'hunter':
        this.SelectedHunter = selected;
        break;
    }
  }

  AddCharacter(character: string, amount: number) {
    switch (character) {
      case 'wolf':
        this.WolvesCounter += amount;
        break;
      case 'villager':
        this.VillagerCounter += amount;
        break;
    }
  }

  StartGame() {

  }

}
