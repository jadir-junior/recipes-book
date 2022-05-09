import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  template: `
    <rb-header></rb-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
