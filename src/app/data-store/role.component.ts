import {Component} from '@angular/core';

export enum Role {
  Villager,
  Wolf,
  Witch,
  Prophet,
  Hunter
}

export enum RescueWitchRules {
  canRescue = 'canRescue',
  canNotRescue = 'canNotRescue',
  canRescueOnFirstNight = 'canRescueOnFirstNight'
}

export enum RoleGoodBad {
  Good = 'Good',
  Bad = 'Bad'
}
