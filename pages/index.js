"use client";
import React from 'react';
import CheckoutPage from '../src/app/components/CheckoutPage/CheckoutPage';
import { fetchOrderDetails } from '../src/app/services/api';
import useCart from '../src/app/state/cart';

const Home = () => {
  const { setCart, setSelectedPaymentMethod } = useCart();

  const fetchInitialOrderDetails = async () => {
    try {
      const data = await fetchOrderDetails();

      if (data) {
        setCart(data.products);
        if (data.paymentMethods.length > 0) {
          setSelectedPaymentMethod(data.paymentMethods[0]);
        }
      } else {
        console.error('Invalid data structure:', data);
      }
    } catch (error) {
      console.error('Error fetching initial order details:', error);
    }
  };

  React.useEffect(() => {
    fetchInitialOrderDetails();
  }, []);

  return (
    <div>
      <CheckoutPage />
    </div>
  );
};

export default Home;