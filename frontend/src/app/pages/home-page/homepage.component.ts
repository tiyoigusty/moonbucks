import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, CardComponent],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {}
