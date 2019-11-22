import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { DataStore } from './data-store/data-store.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameHomeComponent} from './game-home/game-home.component';
import {GameFunction} from './PublicFunction/game-function.component';
import {GameJoinComponent} from './game-join/game-join.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameHomeComponent,
    GameJoinComponent,
    GameSetupComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    DataStore,
    GameFunction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

