import { Component } from '@angular/core';

@Component({
  selector: 'rb-recipe',
  template: `
    <div class="row">
      <rb-recipes-filter></rb-recipes-filter>
      <rb-recipes-list></rb-recipes-list>
    </div>
  `,
})
export class RecipeComponent {}
