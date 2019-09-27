import {Component, OnInit} from '@angular/core';
import {DataStore, Role} from '../data-store/data-store.component';
import {Character, Witch} from '../data-store/character.component';

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  SelectedWitch = true;
  SelectedProphet = true;
  SelectedHunter = true;
  WolvesCounter = 3;
  VillagerCounter = 3;
  RescueWitchRules = {
    canRescue: 'canRescue',
    canNotRescue: 'canNotRescue',
    canRescueOnFirstNight: 'canRescueOnFirstNight'
  };
  defaultRescueWitchRule = this.RescueWitchRules.canRescueOnFirstNight;
  bothRescuePoison = false;
  warning: String = '';

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    // this.data.StoreCharacter('Greg');
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
    this.ValidateGame();
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
    this.ValidateGame();
  }

  ValidateGame() {
    if (this.VillagerCounter < 0) {
      this.VillagerCounter = 0;
    }
    if (this.WolvesCounter < 0) {
      this.WolvesCounter = 0;
    }

    if (this.VillagerCounter > 0 || this.WolvesCounter > 0 || this.SelectedWitch || this.SelectedHunter || this.SelectedProphet) {
      this.warning = '';
      return true;
    }
    this.warning = 'AHHHHHHHHHHHHHHHHHH!';
    return false;
  }

  StartGame() {
    console.log(':D');
    for (let i = 0; i < this.VillagerCounter; i++) {
      this.data.StoreCharacter(new Character(this.makeid(2), Role.Villager));
    }
    for (let i = 0; i < this.WolvesCounter; i++) {
      this.data.StoreCharacter(new Character(this.makeid(2), Role.Wolf));
    }
    if (this.SelectedWitch) {
      this.data.StoreCharacter(new Witch(this.makeid(2), Role.Witch, this.defaultRescueWitchRule, this.bothRescuePoison));
    }
    if (this.SelectedHunter) {
      this.data.StoreCharacter(new Character(this.makeid(2), Role.Hunter));
    }
    if (this.SelectedProphet) {
      this.data.StoreCharacter(new Character(this.makeid(2), Role.Prophet));
    }

  }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
