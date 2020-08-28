import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.less']
})
export class HeroDashboardComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(fetchedHeroes => this.heroes = fetchedHeroes.slice(0, 4));
  }
}
