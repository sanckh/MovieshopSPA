import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './public/genre/add-genre/add-genre.component';
import { GenreComponent } from './public/genre/genre.component';
import { MovieListComponent } from './public/movie-list/movie-list.component';
import { CastComponent } from './public/cast/cast.component';

const routes: Routes = [
  {path: 'genre-list',component:GenreComponent},
  {path: 'movie-list',component:MovieListComponent},
  {path: 'genre/add', component: AddGenreComponent},
  {path: 'cast-list', component: CastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
