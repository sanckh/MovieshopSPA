import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/shared/models/Genre';
import { GenreService } from 'src/app/core/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css'],
  providers:[GenreService]
})
export class AddGenreComponent implements OnInit {

   name:string=''
  // description:string=''
  // country:number = 0
  // tnc:boolean = false
  genre: Genre={id:0, name:''}
  flag:boolean=false;

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
  }

addGenre(genreForm: NgForm){
  this.genre.name = genreForm.value.name
  this.genreService.addGenre(this.genre).subscribe(p=>{this.flag=true;});
}
/*
resetForm(genreForm:NgForm){
  genreForm.reset()
}
fillDefault(genreForm: NgForm){
  let genreObject = {
    name: "SciFi",
    description: "This is SciFi Description",
    country: 1,
    tnc: 'true'
  }
  genreForm.setValue(genreObject)
}
*/
}
