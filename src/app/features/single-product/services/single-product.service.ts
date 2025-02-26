import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IProductInfoDTO} from '../models/IProductInfoDTO';
import {IProductsDTO} from '../../all-products/models/IProductsDTO';
import {IProductCategory} from '../models/IProductCategory';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  apiUrl: string = environment.apiUrl;

  // Get the info of a single product
  getSingleProduct(id: string) {
    return this.http.get<IProductInfoDTO>(`${environment.apiUrl}/products/${id}`);
  }

  // Get the category of an item
  getItemCategory(id: string) {
    return this.http.get<IProductCategory>(`${environment.apiUrl}/products/${id}?select=category`);
  }

  // Get similar items (same category)
  getSimilarItems(category: string) {
    return this.http.get<IProductsDTO>(`${environment.apiUrl}/products/category/${category}`);
  }

  constructor(private http: HttpClient) { }
}
