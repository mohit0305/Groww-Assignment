// src/app/state/cart.js
import { create } from 'zustand';

const useCart = create((set) => ({
  cart: [],
  paymentMethods: [],
  selectedPaymentMethod: null,
  orderTotal: 0,

  setCart: (cartData) => {
    console.log("cart ", cartData);
    if(cartData.products)
    {
    const { products, paymentMethods } = cartData;
    // console.log("products ", products);
    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    set((state) => {
      // Check if the cartData is different from the current state
      // if (
      //   JSON.stringify(state.cart) !== JSON.stringify(products) ||
      //   JSON.stringify(state.paymentMethods) !== JSON.stringify(paymentMethods)
      // ) {
        return {
          cart: products,
          paymentMethods: paymentMethods,
          orderTotal: total,
        };
      // }

      return state;
    });

   }
  },

  setSelectedPaymentMethod: (method) => {
    set({
      selectedPaymentMethod: method,
    });
  },
}));

export default useCart;
