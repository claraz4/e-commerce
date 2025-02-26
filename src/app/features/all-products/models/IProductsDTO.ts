import {IProductInfoDTO} from '../../single-product/models/IProductInfoDTO';

export interface IProductsDTO {
  limit: number;
  products: IProductInfoDTO[];
  skip: number;
  total: number;
}
