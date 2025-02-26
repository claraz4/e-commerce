import { Injectable } from '@angular/core';
import {IProductsDTO} from '../models/IProductsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SortService} from './sort.service';
import {SearchService} from './search.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = `${environment.apiUrl}/products`;

  isSorted: boolean = false;
  sortedAttribute: string = "title";
  sortedOrder: string = "asc";

  search: string = "";

  constructor(private http: HttpClient, private sortService: SortService, private searchService: SearchService) {
    // Subscribe to the sorted variables
    this.sortService.isSorted$.subscribe(data => this.isSorted = data);
    this.sortService.sortedAttribute$.subscribe(data => this.sortedAttribute = data);
    this.sortService.sortedOrder$.subscribe(data => this.sortedOrder = data);

    // Subscribe to search variable
    this.searchService.search$.subscribe(data => this.search = data);
  }

  getAllProducts(
    limit: number, skip: number
  ): Observable<IProductsDTO> {

    let regularQuery: string = `limit=${limit}&skip=${skip}&select=title,price,images`;

    let sortedQuery: string = "";

    if (this.isSorted) {
      sortedQuery = `&sortBy=${this.sortedAttribute}&order=${this.sortedOrder}`;
    }

    let searchQuery: string = ""
    if (this.search !== "") {
      searchQuery = `/search?q=${this.search}&`;
    } else {
      regularQuery = "?" + regularQuery;
    }
    return this.http.get<IProductsDTO>(this.apiUrl + searchQuery + regularQuery + sortedQuery);
  }
}
