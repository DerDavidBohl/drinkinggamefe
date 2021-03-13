import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';
import { TagsComponent } from '../tags/tags.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  game: Game = {
    title: '', description: '', id: '', tags: []
  }

  newTag = '';

  availableTags: string[] = [];

  constructor(private gameService: GameService, private router: Router, private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['gameId']) {
        this.gameService.getGame(params['gameId']).subscribe(game => {
          this.game = game;

          this.tagService.getTags().subscribe(tags => {
            this.availableTags = tags;
            this.updateAvailableTags();
          });
        });
      }
    })
  }

  updateAvailableTags() {
    this.game.tags.forEach(tagInGame => {
      this.availableTags = this.availableTags.filter((value) => {
        return value != tagInGame;
      });
    });
  }

  addTag() {

    if(this.game.tags.includes(this.newTag)) {

      this.newTag = '';
      return;
    }

    this.game.tags.push(this.newTag);

    this.newTag = '';

    this.updateAvailableTags();
  }

  removeTag(tag: string) {

    this.availableTags.push(tag);

    this.game.tags = this.game.tags.filter((value) => {
      return value != tag;
    });

    this.updateAvailableTags();
  }

  createGame() {
    this.gameService.createGame(this.game).subscribe(() => {
      this.navigateToGames();
    })
  }

  saveGame() {
    this.gameService.saveGame(this.game).subscribe(() => {
      this.navigateToGames();
    });
  }

  deleteGame() {
    this.gameService.deleteGame(this.game.id).subscribe(() => {
      this.navigateToGames();
    });
  }

  private navigateToGames() {
    this.router.navigate(['games']);
  }
}
