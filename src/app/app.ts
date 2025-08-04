import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './modules/lol-page/components/header/header';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, HttpClientModule],
  template: `
    <app-header></app-header>
    <div class="main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main-container {
      display: flex;
      height: calc(100vh - 64px);
    }
  `]
})
export class App {
  protected readonly title = 'lol-music';
}
