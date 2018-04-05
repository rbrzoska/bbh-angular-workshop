import { Component, Inject } from '@angular/core';
import { Config, ConfigToken } from './core/tokens';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/contact">Contact</a>
    <a routerLink="/products">Table</a>
    <a routerLink="/tests">Tests</a>
    <router-outlet></router-outlet>
    
    <bbh-notifications-container></bbh-notifications-container>
  `,
  styles: []
})
export class AppComponent {

  constructor(@Inject(ConfigToken) private config: Config) {

    console.log(config);
    setTimeout(() => {
      console.log(config);
    })
  }

  title = 'app';
}
