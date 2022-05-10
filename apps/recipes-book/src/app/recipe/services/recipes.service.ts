import { catchError, of } from 'rxjs';

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
  recipes$ = this.http.get<IRecipe[]>(`${BASE_PATH}/recipes`).pipe(
    catchError((error) => {
      console.error(error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message,
      });
      return of([]);
    })
  );

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
