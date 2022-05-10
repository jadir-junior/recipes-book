import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';

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

  constructor(private fb: FormBuilder) {}

  clearFilter(): void {
    console.log(this.recipeForm.value);
  }

  filterResults(): void {
    this.recipeForm.reset();
  }
}
