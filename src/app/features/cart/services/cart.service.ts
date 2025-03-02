import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICartsDTO} from '../models/ICartsDTO';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  getUserCart() {
    return this.http.get<ICartsDTO>(`${environment.apiUrl}/carts/user/20`);
  }
}
