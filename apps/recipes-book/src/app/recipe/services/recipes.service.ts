import { HttpClient } from '@angular/common/http';
import { IRecipe } from '@rb/data';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http.get<IRecipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) {}
}
