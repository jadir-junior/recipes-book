import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'rb-recipes-filter',
  templateUrl: './recipes-filter.component.html',
})
export class RecipesFilterComponent {
  recipeForm: FormGroup = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(
    private fb: FormBuilder,
    private recipesService: RecipesService
  ) {}

  clearFilter(): void {
    this.recipeForm.reset();
  }

  filterResults(): void {
    this.recipesService.updateFilter(this.recipeForm.value);
  }
}
