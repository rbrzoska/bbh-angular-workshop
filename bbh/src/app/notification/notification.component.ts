import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-notification',
  template: `
    <div>{{message}}</div>
  `,
  styles: []
})
export class NotificationComponent implements OnInit {

  message: string = 'hello!';
  constructor() { }

  ngOnInit() {
  }

}
