import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/contact">Contact</a>
    <a routerLink="/table-demo">Table</a>
    <router-outlet></router-outlet>
    <bbh-test>
      <h1>Header title</h1>
      <p class="par">Paragraph</p>
      <p class="par">Paragraph</p>
      <p class="par">Paragraph</p>
    </bbh-test>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
