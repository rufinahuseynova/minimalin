
import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find((product) =>
        product.id === action.payload.id);
      if (findProduct) {
        // mehsul sebetdedir
        const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        // yeni mehsul elave et
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasket: (state) => {
      state.totalAmount = 0;
      state.products.forEach((product) => {
        state.totalAmount += product.price * product.count;
      });
    },
    removeFromBasket: (state, action) => {
      // mwhsulu sebetden sil
      state.products = state.products.filter((product) => product.id !== action.payload);
      writeFromBasketToStorage(state.products);
      // umumi qiymeti yenile
      state.totalAmount = 0;
      state.products.forEach((product) => {
        state.totalAmount += product.price * product.count;
      });
    }
  }
});

export const { addToBasket, setDrawer, calculateBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
