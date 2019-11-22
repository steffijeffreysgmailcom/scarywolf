import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GamePlayComponent } from './game-play/game-play.component';
import {GameHomeComponent} from './game-home/game-home.component';
import {GameJoinComponent} from './game-join/game-join.component';
const routes: Routes = [
  { path: 'home', component: GameHomeComponent },
  { path: 'join', component: GameJoinComponent },
  { path: 'setup', component: GameSetupComponent },
  { path: 'play',  component: GamePlayComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
