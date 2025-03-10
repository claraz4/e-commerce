import { createActionGroup, props } from '@ngrx/store';
import {IProductCartDTO} from '../models/IProductCartDTO';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add to Cart': props<{ product: IProductCartDTO }>(),
    'Remove From Cart': props<{ productId: string }>(),
    'Increment Quantity': props<{ productId: string }>(),
    'Decrement Quantity': props<{ productId: string }>(),
  },
});

export const CartApiActions = createActionGroup({
  source: 'Cart API',
  events: {
    'Retrieved Cart': props<{ cart: ReadonlyArray<IProductCartDTO> }>(),
  },
});
