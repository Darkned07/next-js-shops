import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  total: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCard: (state, { payload }) => {
      const item = state.allProduct.find((stor) => stor.id === payload.id);
      if (item) {
        item.amount += 1;
        state.total -= 1;
      } else {
        state.allProduct = [...state.allProduct, payload];
        state.total += 1;
      }
      productSlice.caseReducers.counterTotal(state);
    },
    counterTotal: (state) => {
      let allPrices = 0;
      let selectedProds = 0;
      state.allProduct.forEach((prod) => {
        allPrices += prod.amount * prod.price;
        selectedProds += prod.amount;
      });
      state.price = allPrices;
      state.total = selectedProds;
    },
    decrementProduct: (state, { payload }) => {
      const item = state.allProduct.find((store) => store.id === payload);
      if (item) {
        item.amount -= 1;
        state.total -= 1;
      }
      productSlice.caseReducers.counterTotal(state);
    },
    incrementProduct: (state, { payload }) => {
      const item = state.allProduct.find((store) => store.id === payload);
      if (item) {
        item.amount += 1;
        state.total += 1;
      }
      productSlice.caseReducers.counterTotal(state);
    },
    deletedProduct: (state, { payload }) => {
      const del = state.allProduct.filter((dels) => dels.id !== payload);
      if (del) {
        state.allProduct = del;
      }
      productSlice.caseReducers.counterTotal(state);
    },
  },
});

export default productSlice.reducer;
export const { addToCard, incrementProduct, decrementProduct, deletedProduct } =
  productSlice.actions;
