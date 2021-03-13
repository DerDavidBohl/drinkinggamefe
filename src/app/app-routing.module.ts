import { PlayComponent } from './play/play.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'tags', component: TagsComponent },
  {path: 'games', component: GamesComponent },
  {path: 'games/new', component: EditGameComponent },
  {path: 'games/:gameId', component: EditGameComponent },
  {path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
