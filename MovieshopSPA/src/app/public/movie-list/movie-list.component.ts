import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/Movie';
import { MovieService } from 'src/app/core/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieListComponent]
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[]
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(p => this.movies = p)
  }

}
