import {Component} from '@angular/core';
import {DataStore} from '../data-store/data-store.component';
import {Character} from '../data-store/character/character.component';
import {Witch} from '../data-store/character/witch.component';
import {RescueWitchRules, Role} from '../data-store/role.component';
import {Wolf} from '../data-store/character/wolf.component';
import {Prophet} from '../data-store/character/prophet.component';
import {Hunter} from '../data-store/character/hunter.component';
import {Router} from '@angular/router';

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent {

  RescueWitchRules = RescueWitchRules;
  Role = Role;
  SelectedWitch = true;
  SelectedProphet = true;
  SelectedHunter = true;
  WolvesCounter = 3;
  VillagerCounter = 3;
  CurrentRescueWitchRule = RescueWitchRules.canRescueOnFirstNight;
  BothRescuePoison = false;
  warning = '';

  constructor(private data: DataStore, private router: Router) {
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
    this.warning = 'Not enough people!';
    return false;
  }

  StartGame() {
    const RoomToken = this.MakeId(6); // TODO: check if it is valid
    const characters = new Array<Character>();

    for (let i = 0; i < this.VillagerCounter; i++) {
      characters.push(new Character(this.MakeId(2), Role.Villager));
    }
    for (let i = 0; i < this.WolvesCounter; i++) {
      characters.push(new Wolf(this.MakeId(2), Role.Wolf));
    }
    if (this.SelectedWitch) {
      characters.push(new Witch(this.MakeId(2), Role.Witch, this.CurrentRescueWitchRule, this.BothRescuePoison));
    }
    if (this.SelectedHunter) {
      characters.push(new Hunter(this.MakeId(2), Role.Hunter));
    }
    if (this.SelectedProphet) {
      characters.push(new Prophet(this.MakeId(2), Role.Prophet));
    }
    this.data.RoomToken = RoomToken;
    this.data.CreateRoom(characters, () => {
      this.router.navigateByUrl('/play');
    });
  }

  private MakeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
