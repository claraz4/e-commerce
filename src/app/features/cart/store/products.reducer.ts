import { createReducer, on } from '@ngrx/store';
import {CartActions} from './cart.actions';
import {IProductCartDTO} from '../models/IProductCartDTO';

export const initialState: ReadonlyArray<IProductCartDTO> = [];

export const productsReducer = createReducer(
  initialState,
  on(CartActions.removeFromCart, (state, { productId }) =>
    state.filter((product) => product.id !== Number(productId))
  ),
  on(CartActions.addToCart, (state, { product }) => {
    return [...state, product];
  }),
  on(CartActions.incrementQuantity, (state, { productId }) => {
    const prevState = [ ...state ];
    for (let i = 0; i < prevState.length; i++) {
      let currentProduct = prevState[i];
      if (currentProduct.id === Number(productId)) {
        currentProduct = {
          ...currentProduct,
          quantity: currentProduct.quantity + 1
        }
        prevState[i] = currentProduct;
      }
    }
    return prevState;
  }),
  on(CartActions.decrementQuantity, (state, { productId }) => {
    const prevState = [ ...state ];
    for (let i = 0; i < prevState.length; i++) {
      let currentProduct = prevState[i];
      if (currentProduct.id === Number(productId)) {
        currentProduct = {
          ...currentProduct,
          quantity: currentProduct.quantity - 1
        }
        prevState[i] = currentProduct;
      }
    }
    return prevState;
  })
);
