import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/contact">Contact</a>
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
