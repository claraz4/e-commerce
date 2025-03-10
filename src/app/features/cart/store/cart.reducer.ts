import { createReducer, on } from '@ngrx/store';

import { CartApiActions } from './cart.actions';
import {IProductCartDTO} from '../models/IProductCartDTO';

export const initialState: ReadonlyArray<IProductCartDTO> = [];

export const cartReducer = createReducer(
  initialState,
  on(CartApiActions.retrievedCart, (_state, { cart }) => cart)
);
