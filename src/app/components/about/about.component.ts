import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game, GameAbout } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export default class AboutComponent implements OnInit {

  gameId: string = '';
  gameDet!: Game;
  aboutResp!: GameAbout;
  isLoading = false;

  @Input() game! : Game;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.gameId = params['id']})
    this.getAboutDetails2()
  }


  getAboutDetails2(){
    this.isLoading = true
    this.httpService.getGameDetails2(this.gameId, 'about').subscribe((aboutResp: any) => {
      this.aboutResp = aboutResp;
      this.isLoading = false
    })
  }


}
