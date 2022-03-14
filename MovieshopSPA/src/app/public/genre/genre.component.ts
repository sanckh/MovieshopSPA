import { Component, OnInit } from '@angular/core';
import {Genre} from 'src/app/shared/models/Genre';
import {GenreService} from 'src/app/core/genre.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers: [GenreComponent]
})
export class GenreComponent implements OnInit {

  dltMsg = null
  genres:Genre[]=[]
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenre().subscribe(p=> this.genres = p)
  }
  deleteGenre(id:number){
    this.genreService.deleteGenre(id).subscribe(p=>{

    this.genres = this.genres.filter(ele => {
      return +ele.id !== +id
    })
    }, err=>{
      console.log(err)
    },
    );
  }
}
