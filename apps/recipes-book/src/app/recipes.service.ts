import { HttpClient } from '@angular/common/http';
import { IRecipe } from '@rb/data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${BASE_PATH}/recipes`);
  }
}
