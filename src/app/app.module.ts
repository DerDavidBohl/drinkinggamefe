
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { GamesComponent } from './games/games.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlayComponent } from './play/play.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TagsComponent,
    GamesComponent,
    NavigationComponent,
    EditGameComponent,
    PlayComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
