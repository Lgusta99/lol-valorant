import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './modules/lol-page/components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('lol-music');
}
