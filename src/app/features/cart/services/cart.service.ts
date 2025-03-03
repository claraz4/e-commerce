import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICartsDTO} from '../models/ICartsDTO';
import {environment} from '../../../../environments/environment';
import {IProductCartDTO} from '../models/IProductCartDTO';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  cartProducts = signal<IProductCartDTO[]>([]);
  total = signal<number>(0);

  // Get all products in cart
  getUserCart() {
    return this.http.get<ICartsDTO>(`${environment.apiUrl}/carts/user/20`);
  }

  // Delete a cart product
  deleteProduct(id: number) {
    // get original info
    let totalPrice: number = 0;
    for (let item of this.cartProducts()) {
      if (item.id === id) {
        totalPrice = item.total;
      }
    }

    // delete it from the list
    this.cartProducts.set(this.cartProducts().filter(item => item.id !== id));

    // update the total
    this.total.set(this.total() - totalPrice);
  }
}
