import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/smartish-app/src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable()
export class CategoryService {
  private apiUrl = `${environment.baseUrl}/category`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }

  load(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${categoryId}`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}`, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${category.name}`, category);
  }

  delete(categoryId: string): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}/${categoryId}`);
  }
}
