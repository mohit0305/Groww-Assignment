// OrderConfirmationPage.js
"use client";
// import React, { useEffect } from 'react';
// import useCart from '../../state/cart';
// import Link from 'next/link';
// import { fetchOrderDetails } from '../../services/api';
// import styles from './OrderConfirmationPage.module.css'; // Include your styles

// const OrderConfirmationPage = () => {
//   const { cart, selectedPaymentMethod } = useCart();

//   useEffect(() => {
//     // Fetch order details if needed
//     const fetchData = async () => {
//       const data = await fetchOrderDetails();
//       console.log(data);
//     };
//     fetchData();
//   }, []); // Ensure this runs only once on component mount

//   return (
//     <div className={styles['order-confirmation-container']}>
//       <h2>Order Confirmation</h2>

//       {/* Display order details */}
//       <div className={styles['order-details']}>
//         <h3>Order Summary:</h3>
//         {cart.map((product) => (
//           <div key={product.id} className={styles['ordered-item']}>
//             <img src={product.image} alt={product.title} />
//             <div>
//               <h4>{product.title}</h4>
//               <p>Price: ${product.price.toFixed(2)}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Display selected payment method */}
//       <div className={styles['payment-method']}>
//         <h3>Payment Method:</h3>
//         <p>{selectedPaymentMethod}</p>
//       </div>

//       {/* Display order status message */}
//       <div className={styles['order-status']}>
//         <h3>Order Status:</h3>
//         <p>Order Successful</p>
//       </div>

//       <Link href="/">
//         <button className={styles['proceed-button']}>Back to Checkout</button>
//       </Link>
//     </div>
//   );
// };

// export default OrderConfirmationPage;

// OrderConfirmationPage.js

import React from 'react';
import useCart from '../../state/cart';
import Link from 'next/link';
import { fetchOrderDetails } from '../../services/api';
import styles from './OrderConfirmationPage.module.css'; // Include your styles

const OrderConfirmationPage = () => {
  const { cart, selectedPaymentMethod } = useCart();

  return (
    <div className={styles['order-confirmation-container']}>
     <h2 className={styles.heading}>
     <div className={styles.grow} >

      <img src="https://groww.in/groww-logo-270.png" 
                  alt="Groww Logo"
                  className={styles.paymentLogo}
                />
                </div>
        <div className={styles.check}>        
        Order Confirmation
        </div>
       </h2>
      {/* Display order details */}
      <h3 className={styles['h3']}>Order Summary:</h3>
      <div className={styles['order-details']}>
        
        {cart.map((product) => (
          <div key={product.id} className={styles['ordered-item']}>
            <img src={product.image} alt={product.title} />
            <div>
              <h4>{product.title}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display selected payment method */}
      <div className={styles['payment-method']}>
        <h3 className={styles['h3']}>Payment Method:</h3>
        <p className={styles['p']} >{selectedPaymentMethod}</p>
      </div>

      {/* Display order status message */}
      <div className={styles['order-status']}>
        <h3 className={styles['h3']}>Order Status:</h3>
        <p className={styles['p']}>Order Successful</p>
      </div>

      <Link href="/">
        <button className={styles['proceed-button']}>Back to Checkout</button>
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;

