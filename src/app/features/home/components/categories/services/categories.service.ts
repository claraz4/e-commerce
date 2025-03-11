import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../environments/environment';
import {ICategoryDTO} from '../models/ICategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  categorySelected = signal<string>("");

  // Get all categories
  getCategories(): Observable<ICategoryDTO[]> {
    return this.http.get<ICategoryDTO[]>(`${this.apiUrl}/products/categories`);
  }
}
