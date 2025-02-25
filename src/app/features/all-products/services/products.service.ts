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

  getAllProducts(
    limit: number, skip: number,
    isSorted: boolean, search: string,
    sortedAttribute?: string, sortedOrder?: string,
  ): Observable<IProductsDTO> {

    let regularQuery: string = `limit=${limit}&skip=${skip}&select=title,price,images`;

    let sortedQuery: string = "";
    if (isSorted) {
      sortedQuery = `&sortBy=${sortedAttribute}&order=${sortedOrder}`;
    }

    let searchQuery: string = ""
    if (search !== "") {
      searchQuery = `/search?q=${search}&`;
    } else {
      regularQuery = "?" + regularQuery;
    }
    return this.http.get<IProductsDTO>(this.apiUrl + searchQuery + regularQuery + sortedQuery);
  }
}
