import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipe/recipe.module').then((m) => m.RecipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  providers: [MessageService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
