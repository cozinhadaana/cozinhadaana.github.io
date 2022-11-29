import { createSlice } from '@reduxjs/toolkit';
import { iProducts, TradicionalsCollection, GourmetsCollection, SopasCollection } from '../../db';
export interface iProductsInitialState {
  tradicional: iProducts[];
  gourmet: iProducts[];
  sopas: iProducts[];
}

const initialState = {
  tradicional: TradicionalsCollection,
  gourmet: GourmetsCollection,
  sopas: SopasCollection,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const { id, category } = payload;

      // pegar o index do item com id correspondente ao passado pelo parametro
      if (category === 'Tradicional') {
        const index = state.tradicional.findIndex((item) => item.id === id);
        payload.qt++;
        state.tradicional[index] = payload
      } else if (category === 'Gourmet') {
        const index = state.gourmet.findIndex((item) => item.id === id);
        payload.qt++;
        state.gourmet[index] = payload
      } else {
        const index = state.sopas.findIndex((item) => item.id === id);
        payload.qt++;
        state.sopas[index] = payload
      }
    },
    deleteItem(state, { payload }) {
      const { id, category } = payload;
      if (category === 'Tradicional'){
        const index = state.tradicional.findIndex((item) => item.id === id);
        payload.qt--;
        state.tradicional[index] = payload
      }
      else if (category === 'Gourmet'){
        const index = state.gourmet.findIndex((item) => item.id === id);
        payload.qt--;
        state.gourmet[index] = payload
      }
      else{
        const index = state.sopas.findIndex((item) => item.id === id);
        payload.qt--;
        state.sopas[index] = payload
      }
    },
    deleteProduct(state, { payload }) {
      const { id, category } = payload;

      if (category === 'Tradicional') state.tradicional = state.tradicional.filter((tradicional) => tradicional.id !== id);
      else if (category === 'Gourmet')
        state.gourmet = state.gourmet.filter((gourmet) => gourmet.id !== id);
      else state.sopas = state.sopas.filter((sopas) => sopas.id !== id);
    },
  },
});

export const { addItem, deleteItem } = productSlice.actions;

export default productSlice.reducer;
