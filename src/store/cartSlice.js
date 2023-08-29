import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList : [],
    checkout: {
        subTotal: 0,
        taxes: 10,
    }
}

const calculateSubTotal = (cartList) => {
    return cartList.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartList.find(product => product.id === action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
            }else{
                state.cartList.push({
                    ...action.payload,
                    quantity:1
                })
            } 
            state.checkout.subTotal = calculateSubTotal(state.cartList);
        },
        increaseQuantity: (state, action) => {
            const productToIncrease = state.cartList.find(product=>product.id === action.payload.id)
            if (productToIncrease) {
                productToIncrease.quantity++;
            }
            state.checkout.subTotal = calculateSubTotal(state.cartList);
        },
        decreaseQuantity: (state, action) => {
            const productIdToDecrease = action.payload.id;
            const itemToDecrease = state.cartList.find(item => item.id === productIdToDecrease);

            if (itemToDecrease) {
                if (itemToDecrease.quantity > 1) {
                    itemToDecrease.quantity--;
                } else {
                    state.cartList = state.cartList.filter(item => item.id !== productIdToDecrease);
                }
            }
            state.checkout.subTotal = calculateSubTotal(state.cartList);
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
            console.log(state.cartList)
            state.checkout.subTotal = calculateSubTotal(state.cartList);
        }
    }
})


export const {addToCart, increaseQuantity, decreaseQuantity, removeFromCart} = cartSlice.actions

export default cartSlice.reducer