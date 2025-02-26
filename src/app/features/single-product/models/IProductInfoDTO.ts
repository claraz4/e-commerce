import {IReviewDTO} from '../../../shared/single-product/models/IReviewDTO';

export interface IProductInfoDTO {
  id:                   number;
  title:                string;
  description:          string;
  category:             string;
  price:                number;
  discountPercentage:   number;
  rating:               number;
  stock:                number;
  tags:                 string[];
  brand:                string;
  sku:                  string;
  weight:               number;
  dimensions:           Dimensions;
  warrantyInformation:  string;
  shippingInformation:  string;
  availabilityStatus:   string;
  reviews:              IReviewDTO[];
  returnPolicy:         string;
  minimumOrderQuantity: number;
  meta:                 Meta;
  images:               string[];
  thumbnail:            string;
}

interface Dimensions {
  width:  number;
  height: number;
  depth:  number;
}

interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode:   string;
  qrCode:    string;
}
