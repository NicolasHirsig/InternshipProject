import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { // these are all services :O

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(fetchedHeroId => this.hero = fetchedHeroId);
  }

  goBack(): void {
    this.location.go('/heroes');
  }

}
