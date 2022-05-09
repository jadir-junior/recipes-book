import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, RecipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
