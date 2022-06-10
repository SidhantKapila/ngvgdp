import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game, GameAbout } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {
  gameId: string = '';
  gameDet!: Game;
  ssResp!: any;
  isLoading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.gameId = params['id']})
    this.getScreenshotsDetails2()
  }

  getScreenshotsDetails2(){
    this.isLoading = true
    this.httpService.getGameDetails2(this.gameId, 'screenshots').subscribe((ssResp: any) => {
      this.ssResp = ssResp.results;
      this.isLoading = false
      console.log('screenshot results', ssResp.results)
    })
  }
}
