import {IProductAdmin} from './IProductAdmin';

export interface IProductsAdminDTO {
  limit: number;
  products: IProductAdmin[];
  skip: number;
  total: number;
}
