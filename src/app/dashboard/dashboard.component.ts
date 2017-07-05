import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';

import { KodiService } from '../kodi.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private movies : Observable<Array<Movie>>;

  constructor(private kodiService : KodiService) { }

  ngOnInit() {
    this.movies = this.kodiService.getMoviesForKids();
  }

  public playMovie(movie : Movie) {
    this.kodiService.playMovie(movie);
  }

}
