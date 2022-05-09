import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'rb-recipes-list',
  template: `
    <div class="card" *ngIf="recipes$ | async as recipes">
      <p-dataView
        #dv
        [value]="recipes"
        [paginator]="true"
        [rows]="9"
        filterBy="name"
        layout="grid"
      ></p-dataView>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  recipes$ = this.recipesService.recipes$;

  constructor(private recipesService: RecipesService) {}
}
