import { AppComponent } from './app.component';
import { AppPrimengModule } from './app-primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPrimengModule,
    HttpClientModule,
    CoreModule,
    RecipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
