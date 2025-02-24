import {IProductInfoDTO} from './IProductInfoDTO';

export interface IProductsDTO {
  limit: number;
  products: IProductInfoDTO[];
  skip: number;
  total: number;
}
