import {IProductCartDTO} from './IProductCartDTO';

export interface ICartInfoDTO {
  id: number;
  products: IProductCartDTO[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
