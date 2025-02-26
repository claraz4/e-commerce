import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IProductInfoDTO} from '../models/IProductInfoDTO';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  apiUrl: string = environment.apiUrl;

  // Get the info of a single product
  getSingleProduct(id: string) {
    return this.http.get<IProductInfoDTO>(`${environment.apiUrl}/products/${id}`);
  }

  constructor(private http: HttpClient) { }
}
