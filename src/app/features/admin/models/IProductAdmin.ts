import {ProductStatus} from './product-status';

export interface IProductAdmin {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  availabilityStatus: ProductStatus;
}
