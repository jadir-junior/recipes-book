import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  template: `
    <p-toast position="top-right"></p-toast>
    <rb-header></rb-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
