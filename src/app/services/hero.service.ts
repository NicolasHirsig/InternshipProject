import { Injectable } from '@angular/core';   // services can easily fetch data and need to be used bc components should only focus on displaying data
import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { mockHeroes } from '../mock-heroes'; // importing the whole array
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'    // provider provides service to be injected into components
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService fetched the heroes')
    return of(mockHeroes);  // return whole array (as an observable)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched ID ' + id)
    return of(mockHeroes.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
