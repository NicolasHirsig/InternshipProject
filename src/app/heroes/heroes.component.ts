import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }   // makes an instance of services

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(fetchedHeroes => this.heroes = fetchedHeroes)  // getter returns observable, which we subscribe to and export the value into fetchedHeroes. 
  }                                                                                       // Then we give the heroes variable the value of fetchedHeroes

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero: ${hero.name}`)
  }
}
