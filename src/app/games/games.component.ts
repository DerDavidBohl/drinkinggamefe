import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';
import { GameService as GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  loading = true;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(games => {
      this.games = games;
      this.loading = false;
    });
  }



}
