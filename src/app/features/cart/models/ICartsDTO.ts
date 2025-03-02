import {ICartInfoDTO} from './ICartInfoDTO';

export interface ICartsDTO {
  id: number;
  carts: ICartInfoDTO[];
  total: number;
  skip: number;
  limit: number;
}
