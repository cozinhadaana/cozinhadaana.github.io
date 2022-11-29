import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice';
import productReducer, { iProductsInitialState } from './slices/product.slice';
import { iUser } from '../db';

export interface iReducerStore {
  user: iUser;
  products: iProductsInitialState;
}

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});
