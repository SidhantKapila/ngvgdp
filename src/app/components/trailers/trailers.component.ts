import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game, GameAbout } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {
  gameId: string = '';
  gameDet!: Game;
  ttResp!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.gameId = params['id']})
    this.getTrailersDetails2()
  }

  getTrailersDetails2(){
    this.httpService.getGameDetails2(this.gameId, 'trailers').subscribe((ttResp: any) => {
      this.ttResp = ttResp.results;
      console.log('t1', ttResp.results)
    })
  }

}
