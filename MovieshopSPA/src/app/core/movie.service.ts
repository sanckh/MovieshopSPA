import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/Movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getAllMovie(){
    return this.http.get<Movie[]>("https://localhost:44328/api/Movie/all");
  }
}