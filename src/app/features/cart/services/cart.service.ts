import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICartsDTO} from '../models/ICartsDTO';
import {environment} from '../../../../environments/environment';
import {IProductCartDTO} from '../models/IProductCartDTO';
import {tap} from 'rxjs';

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
    return this.http.get<ICartsDTO>(`${environment.apiUrl}/carts/user/20`).pipe(
      tap(data => {
        this.cartProducts.set(data.carts[0].products);
        this.total.set(data.carts[0].total);
      })
    );
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

    this.cartProducts.set(this.cartProducts().filter(item => item.id !== id));

    // update the total
    this.total.set(this.total() - totalPrice);
  }

  // Change product quantity
  updateProductQuantity(id: number, decrement: boolean = false) {
    let cart = this.cartProducts();
    let newCart = [ ...cart ];
    let newProduct: IProductCartDTO;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        newProduct = cart[i];

        if (decrement) {
          if (newProduct.quantity === 1) {
            this.deleteProduct(id);
            return;
          } else {
            newProduct.quantity--;
            newProduct.total -= newProduct.price;
            this.total.set(this.total() - newProduct.price);
          }
        } else {
          newProduct.quantity++;
          newProduct.total += newProduct.price;
          this.total.set(this.total() + newProduct.price);
        }

        newCart[i] = { ...newProduct };

        break;
      }
    }

    this.cartProducts.set(newCart);
  }
}
