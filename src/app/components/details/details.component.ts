import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating=0;
  gameId: string = '';
  game!: Game;
  routeSub: Subscription = new Subscription;
  gameSub: Subscription = new Subscription;
  isLoading = false;

  gameTabs=[
    {
      name : "About",
      route: "about"
    },
    {
      name : "Screenshots",
      route: "screenshots"
    },
    {
      name : "Trailers",
      route: "trailers"
    },
  ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService : HttpService,
  ) { }


  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails2(this.gameId, 'about');
    });
  }

  ngOnDestroy(): void {
    if (this.gameSub){
      this.gameSub.unsubscribe()
    }
    if (this.routeSub){
      this.routeSub.unsubscribe()
    }
  }


  getGameDetails2(id: string, request: string){
    this.isLoading = true;
    this.gameSub = this.httpService.getGameDetails2(id, request).subscribe((gameResp : Game) => {
      this.game = gameResp;
      setTimeout(()=>{this.gameRating = this.game.metacritic; this.isLoading = false}, 1000)
    });
  }

  getColor(value: number): string{
    if (value > 75){
      return '#5ee432';
    } else if (value > 50){
      return '#fff150'
    } else if (value > 30){
      return '#f7aa38'
    } else {
      return '#ef4655'
    }
  }
}
