import { Injectable } from '@angular/core';
import {IProductsDTO} from '../models/IProductsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  getAllProducts(limit: number, skip: number): Observable<IProductsDTO> {
    return this.http.get<IProductsDTO>(this.apiUrl + `?limit=${limit}&skip=${skip}&select=title,price,images`);
  }
}
