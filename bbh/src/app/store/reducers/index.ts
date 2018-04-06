import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProducts from './products.reducer'
import { getProductsList, ProductsState } from './products.reducer';

export interface State {
  products: fromProducts.ProductsState
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getProductListState = createSelector(getProductsState, (state: ProductsState) => state.productsList)
