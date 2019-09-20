import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GamePlayComponent } from './game-play/game-play.component';
const routes: Routes = [
  { path: 'setup', component: GameSetupComponent },
  { path: 'play',  component: GamePlayComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
