import { Component, OnDestroy, OnInit } from '@angular/core';

import { IRecipe } from '@rb/data';
import { Subject, takeUntil } from 'rxjs';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'rb-recipes-list',
  template: ` <p>recipes-list works!</p> `,
  styles: [],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: IRecipe[];
  destroy$ = new Subject<void>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.recipes = result;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
