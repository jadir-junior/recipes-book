import { AppPrimengModule } from '../app-primeng.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  declarations: [RecipesListComponent],
  imports: [CommonModule, RecipeRoutingModule, AppPrimengModule, FormsModule],
})
export class RecipeModule {}
