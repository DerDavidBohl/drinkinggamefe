import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<Game[]>(`${environment.apiBaseUrl}/api/v1/games`)
  }

  createGame(game: Game) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/games`, game);
  }

  getGame(id: string) {
    return this.http.get<Game>(`${environment.apiBaseUrl}/api/v1/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.put(`${environment.apiBaseUrl}/api/v1/games/${game.id}`, game);
  }

  deleteGame(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/api/v1/games/${id}`);
  }
}
