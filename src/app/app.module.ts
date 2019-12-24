import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GameCreateComponent} from './game-create/game-create.component';
import {GamePlayComponent} from './game-play/game-play.component';
import {DataStore} from './data-store/data-store.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameHomeComponent} from './game-home/game-home.component';
import {GameJoinComponent} from './game-join/game-join.component';
import {FormsModule} from '@angular/forms';
import {AppsyncService} from './data-store/appsync.service';

@NgModule({
  declarations: [
    AppComponent,
    GameHomeComponent,
    GameJoinComponent,
    GameCreateComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AppsyncService,
    DataStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

