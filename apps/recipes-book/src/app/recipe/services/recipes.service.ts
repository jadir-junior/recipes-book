import { BehaviorSubject, catchError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IRecipe } from '@rb/data';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private filterRecipeSubject = new BehaviorSubject<Partial<IRecipe>>({
    title: '',
  });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  recipes$ = this.http.get<IRecipe[]>(`${BASE_PATH}/recipes`).pipe(
    catchError((error) => {
      return this.consoleErrorAndToasterErrorMessage(error);
    })
  );

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  updateFilter(criteria: Partial<IRecipe>) {
    this.filterRecipeSubject.next(criteria);
  }

  consoleErrorAndToasterErrorMessage(error: Error) {
    console.error(error);
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: error.message,
    });
    return of([]);
  }
}
