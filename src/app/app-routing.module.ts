import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameCreateComponent} from './game-create/game-create.component';
import {GamePlayComponent} from './game-play/game-play.component';
import {GameHomeComponent} from './game-home/game-home.component';
import {GameJoinComponent} from './game-join/game-join.component';

const routes: Routes = [
  {path: 'home', component: GameHomeComponent},
  {path: 'create', component: GameCreateComponent},
  {path: 'join', component: GameJoinComponent},
  {path: 'play', component: GamePlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
