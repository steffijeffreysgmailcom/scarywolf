import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



export enum CharacterState{
  alive,
  dead
}

@Injectable()
export class DataStore {
  currentCharacter:String = "Blah";
  StoreCharacter(name: String) {
    this.currentCharacter = name;
  }

  UpdateCharacter(state: CharacterState) {

  }

  GetCharacter() {
    return this.currentCharacter
  }

}
