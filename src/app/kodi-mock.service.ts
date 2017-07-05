import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Movie } from './movie';

@Injectable()
export class KodiMockService {

  constructor() { }

  public getMoviesForKids() : Observable<Array<Movie>> {
    return Observable.of([
      {
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      },{
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1._SY140_.jpg',
        file: 'path/to/file'
      }
    ]);
  }

  public playMovie(movie : Movie) : void {}
}
