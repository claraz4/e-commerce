import {inject, Injectable} from '@angular/core';
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

  private http = inject((HttpClient));
  private sortService = inject((SortService));
  private searchService = inject((SearchService));

  // Getters for the signals
  get isSorted() {
    return this.sortService.isSorted();
  }

  get sortedAttribute() {
    return this.sortService.sortedAttribute();
  }

  get sortedOrder() {
    return this.sortService.sortedOrder();
  }

  get search() {
    return this.searchService.search();
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
