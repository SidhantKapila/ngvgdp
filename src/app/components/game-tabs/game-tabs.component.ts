import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, Tab } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() gameTabs!: Tab[];


  game! : Game;


  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  openComponent(comp: string) {
    console.log('=====', comp)
    // this.router.navigate([], comp);
    this.router.navigate([comp], {relativeTo: this.activateRoute});
  }

}
