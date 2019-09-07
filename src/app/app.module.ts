import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { DataStore } from './data-store/data-store.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSetupComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DataStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

