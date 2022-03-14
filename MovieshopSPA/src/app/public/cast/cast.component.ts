import { Component, OnInit } from '@angular/core';
import {CastService} from 'src/app/core/cast.service'
import {Cast} from 'src/app/shared/models/Cast'

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
  providers:[CastComponent]
})
export class CastComponent implements OnInit {

  casts:Cast[]=[]
  constructor(private castService:CastService) { }

  ngOnInit(): void {
    this.castService.getAllCast().subscribe(p=> this.casts = p)
  }

}
