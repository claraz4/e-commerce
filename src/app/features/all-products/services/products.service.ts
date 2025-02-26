import { Injectable } from '@angular/core';
import {IProductsDTO} from '../models/IProductsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SortService} from './sort.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = `${environment.apiUrl}/products`;

  isSorted: boolean = false;
  sortedAttribute: string = "title";
  sortedOrder: string = "asc";

  constructor(private http: HttpClient, private sortService: SortService) {
    // Subscribe to the sorted variables
    this.sortService.isSorted$.subscribe(data => this.isSorted = data);
    this.sortService.sortedAttribute$.subscribe(data => this.sortedAttribute = data);
    this.sortService.sortedOrder$.subscribe(data => this.sortedOrder = data);
  }

  getAllProducts(
    limit: number, skip: number, search: string
  ): Observable<IProductsDTO> {

    let regularQuery: string = `limit=${limit}&skip=${skip}&select=title,price,images`;

    let sortedQuery: string = "";

    if (this.isSorted) {
      sortedQuery = `&sortBy=${this.sortedAttribute}&order=${this.sortedOrder}`;
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
