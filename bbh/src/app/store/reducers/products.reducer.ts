import { Action } from '@ngrx/store';
import { Product } from '../../products/Product';
import { ProductsActions, ProductsActionTypes } from '../products.actions';


export interface ProductsState {
  productsList: Product[]
}

export const initialState: ProductsState = {
  productsList: []
};

export function reducer(state = initialState, action: ProductsActions): ProductsState {
  switch (action.type) {

    case ProductsActionTypes.AddProduct:
      return {...state, productsList:[...state.productsList, action.payload]};

      case ProductsActionTypes.LoadProductsSuccess:
      return {...state, productsList:[...action.payload]};

    default:
      return state;
  }
}

export const getProductsList = (state: ProductsState) => state.productsList;
