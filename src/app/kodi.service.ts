import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as SockJS from 'sockjs-client';

import { Movie } from './movie';

@Injectable()
export class KodiService {

  private ws : SockJS;
  private observers = {};
  private correlationId = 0;

  constructor() {
    this.connect();
  }

  private connect() : void {
    this.ws = new SockJS(`http://${location.hostname}:9090/ws`);

    this.ws.onclose = (close : CloseEvent) => {
      setTimeout(() => { this.connect() }, 1000);
    }

    this.ws.onmessage = (message : MessageEvent) => {
      let messageData = JSON.parse(message.data);

      console.log('message: ', messageData);

      if(messageData.id){
        let observer : Observer<Movie[]> = this.observers[messageData.id];

        if(messageData.error) {
          observer.error(messageData.error); //error: code, message , data
        } else {
          observer.next(messageData.result);
          observer.complete();
        }
      } else {
          // TODO-FIXME: handle notifications ...
      }
    };
  }

  private send(data) : Observable<Array<Movie>|any> {
    return Observable.create((observer: Observer<any>) => {

      data.jsonrpc = '2.0';
      data.id = this.correlationId < 1000 ? this.correlationId++ : 0,

      this.observers[data.id] = observer;

      this.ws.send(JSON.stringify(data));
    });
  }

  public getMoviesForKids() : Observable<Array<Movie>> {
    return this.send({
      method: 'VideoLibrary.GetMovies',
      params: {
        filter: {
          field: 'mpaa',
          operator: 'is',
          value: "G"
        },
        limits: {
          start: 0,
          end: 1000
        },
        properties: ['thumbnail', 'file'],
        sort: {
          order: 'ascending',
          method: 'playcount', //'label'
          ignorearticle: true
        }
      }
    });
  }

  public playMovie(movie : Movie) : void {
    this.send({
      method: 'Player.Open',
      params: {
        item: {
          file: movie.file
        }
      }
    });
  }
}
