import {Component, OnInit} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {Character} from '../data-store/character/character.component';
import {Witch} from '../data-store/character/witch.component';
import {RescueWitchRules, Role} from '../data-store/role.component';
import {Wolf} from '../data-store/character/wolf.component';
import {Prophet} from '../data-store/character/prophet.component';
import {Hunter} from '../data-store/character/hunter.component';
import {GameFunction} from '../PublicFunction/game-function.component';

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  RescueWitchRules = RescueWitchRules;
  Role = Role;

  SelectedWitch = true;
  SelectedProphet = true;
  SelectedHunter = true;
  WolvesCounter = 3;
  VillagerCounter = 3;
  CurrentRescueWitchRule = RescueWitchRules.canRescueOnFirstNight;
  BothRescuePoison = false;
  warning: String = '';

  constructor(private data: DataStore) {
  }

  ngOnInit() {
    // this.data.StoreCharacter('Greg');
  }

  SelectRole(role: Role) {
    switch (role) {
      case Role.Witch:
        this.SelectedWitch = !this.SelectedWitch;
        break;
      case Role.Prophet:
        this.SelectedProphet = !this.SelectedProphet;
        break;
      case Role.Hunter:
        this.SelectedHunter = !this.SelectedHunter;
        break;
    }
    this.ValidateGame();
  }

  AddRole(role: Role, amount: number) {
    switch (role) {
      case Role.Wolf:
        this.WolvesCounter += amount;
        break;
      case Role.Villager:
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
      this.data.StoreCharacter(new Character(GameFunction.makeid(2), Role.Villager));
    }
    for (let i = 0; i < this.WolvesCounter; i++) {
      this.data.StoreCharacter(new Wolf(GameFunction.makeid(2), Role.Wolf));
    }
    if (this.SelectedWitch) {
      this.data.StoreCharacter(new Witch(GameFunction.makeid(2), Role.Witch, this.CurrentRescueWitchRule, this.BothRescuePoison));
    }
    if (this.SelectedHunter) {
      this.data.StoreCharacter(new Hunter(GameFunction.makeid(2), Role.Hunter));
    }
    if (this.SelectedProphet) {
      this.data.StoreCharacter(new Prophet(GameFunction.makeid(2), Role.Prophet));
    }
  }
}
