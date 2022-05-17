import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';

import { IRecipe } from '@rb/data';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: 'recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  filteredRecipes$ = combineLatest([
    this.recipesService.recipes$,
    this.recipesService.filterRecipesAction$,
  ]).pipe(
    map(([recipes, filter]: [IRecipe[], Partial<IRecipe>]) => {
      return recipes.filter(
        (recipe) =>
          recipe.title
            ?.toLowerCase()
            .indexOf(filter?.title?.toLowerCase() ?? '') != -1
      );
    })
  );

  constructor(private recipesService: RecipesService) {}
}
