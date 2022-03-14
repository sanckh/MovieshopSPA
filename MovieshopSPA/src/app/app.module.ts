import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './public/movie-list/movie-list.component';
import { GenreComponent } from './public/genre/genre.component';
import { AddGenreComponent } from './public/genre/add-genre/add-genre.component';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './public/cast/cast.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JWTAddInterceptor } from './jwtadd.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GenreComponent,
    AddGenreComponent,
    CastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:JWTAddInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
