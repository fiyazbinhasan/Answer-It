import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/quiz.models';

@Injectable({
  providedIn: 'root',
})
export class Quiz {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/qas';

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }
}
