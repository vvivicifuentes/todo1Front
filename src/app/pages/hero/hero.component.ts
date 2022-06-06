import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  heros!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.listHero();
  }

  listHero(){
    this.heroService.getHeros().pipe(
      tap(( res: Hero[] ) => this.heros = res)
    ).subscribe()
  }

}
