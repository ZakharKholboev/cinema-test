import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movies-page/movie/movie.component';
import { MoviesListComponent } from './movies-page/movies-list/movies-list.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';


const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesPageComponent,
    children: [
      { path: ':genre', component: MoviesListComponent },
      { path: ':genre/:movie', component: MovieComponent }
    ]
  },
  { path: '**', redirectTo: '/movies/All' }
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]

})
export class AppRoutingModule {}
