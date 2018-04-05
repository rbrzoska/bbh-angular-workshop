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
    <bbh-comp1 [data]="data"></bbh-comp1>
    <bbh-notifications-container></bbh-notifications-container>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  data = {
    prop1: 1,
    prop2: 2
  };

  ngOnInit() {
    setInterval(() => {
      this.data.prop1++;
    }, 5000)
  }
}
