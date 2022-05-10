import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: 'recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  recipes$ = this.recipesService.recipes$;

  constructor(private recipesService: RecipesService) {}
}
