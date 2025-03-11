import {inject, Injectable} from '@angular/core';
import {IProductsDTO} from '../models/IProductsDTO';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SortService} from './sort.service';
import {SearchService} from './search.service';
import {IProductAdmin} from '../../admin/models/IProductAdmin';
import {IProductsAdminDTO} from '../../admin/models/IProductsAdminDTO';
import {CategoriesService} from '../../home/components/categories/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = `${environment.apiUrl}/products`;

  private http = inject(HttpClient);
  private sortService = inject(SortService);
  private searchService = inject(SearchService);
  private categoriesService = inject(CategoriesService);

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

  get categorySelected() {
    return this.categoriesService.categorySelected();
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

    let categoryQuery = "";
    if (this.categorySelected !== "") {
      categoryQuery = `/category/${this.categorySelected.toLowerCase().replaceAll(' ', '-')}`;
    }

    return this.http.get<IProductsDTO>(this.apiUrl + categoryQuery + searchQuery + regularQuery + sortedQuery);
  }


  getAllProductsAdmin() {
    return this.http.get<IProductsAdminDTO>(`${this.apiUrl}?limit=0&select=id,title,description,category,price,stock,availabilityStatus`);
  }
}
