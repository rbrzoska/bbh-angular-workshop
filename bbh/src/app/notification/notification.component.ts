import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbh-notification',
  template: `
    <div class="notification">{{message}}</div>
  `,
  styles: [`.notification {
    width: 200px;
    min-height: 40px;
    padding: 10px;
    background-color: mediumslateblue;
    color: white;
    font-size: 13px;
    border-radius: 5px;
    margin-bottom: 10px;
  }`]
})
export class NotificationComponent implements OnInit {

  message: string = 'hello!';
  constructor() { }

  ngOnInit() {
  }

}
