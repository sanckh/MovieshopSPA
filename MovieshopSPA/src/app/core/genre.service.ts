import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }
  //get request
  getAllGenre():Observable<Genre[]>{
    return this.http.get<Genre[]>("https://localhost:44328/api/genre/all");
  }

  //this is a post request
  addGenre(genre:Genre){
    return this.http.post("https://localhost:44328/api/genre/add", genre)
  }

  deleteGenre(id:number)
   {
    return this.http.delete("https://localhost:44328/api/genre/"+id, {headers:{
    
      "Content-Type":"text; charset=UTF-8"
    }} )
   }
}