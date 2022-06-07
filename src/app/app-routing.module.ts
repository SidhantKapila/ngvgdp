import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { TrailersComponent } from './components/trailers/trailers.component';

const routes: Routes = [
  {
   path: '',
   component: HomeComponent,
  },
  {
    path: 'search/:game-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'screenshots',
        component: ScreenshotsComponent
      },
      {
        path: 'trailers',
        component: TrailersComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
