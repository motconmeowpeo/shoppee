import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../cart/cartSlice';
import productSlice from '../product/productSlice';

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice
    }
});
export default store;