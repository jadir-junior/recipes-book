import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppPrimengModule } from '../app-primeng.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesFilterComponent } from './components/recipes-filter/recipes-filter.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

@NgModule({
  declarations: [RecipesFilterComponent, RecipeComponent, RecipesListComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    AppPrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RecipeModule {}
