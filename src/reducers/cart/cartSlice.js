import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
        cartTotalQuanlity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            console.log(action.payload)
            console.log(action.payload.quanlity)
            const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload._id)
            if (itemIndex >= 0) {
                if (action.payload.quanlity && action.payload.quanlity > 1)
                    state.cartItem[itemIndex].cartQuanlity += action.payload.quanlity
                else
                    state.cartItem[itemIndex].cartQuanlity += 1
            }
            else {

                const tempProduct = { ...action.payload, cartQuanlity: 1 }
                state.cartItem.push(tempProduct)
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))

        },
        deleteToCart(state, action) {
            const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload._id)
            if (itemIndex >= 0) {
                state.cartItem.splice(itemIndex, 1)
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))

        }
    }
})
export const { addToCart, deleteToCart } = cartSlice.actions;
export default cartSlice.reducer