import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Hero } from '../interfaces/hero.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient ) { }

  getHeros (): Observable<Hero[]> {
    const token = localStorage.getItem( 'token' ) || '';

    return this.http.get<Hero[]>( `${base_url}/superHero`, {
      headers: {
        'Authorization': `${ token }`
      }
    } );

  }
}
