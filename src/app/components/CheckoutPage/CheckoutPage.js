// CheckoutPage.js
import React from 'react';
import useCart from '../../state/cart';
import Link from 'next/link';
import { fetchOrderDetails } from '../../services/api';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const { cart, paymentMethods, selectedPaymentMethod, orderTotal, setCart, setSelectedPaymentMethod } = useCart();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrderDetails();
        console.log(data)
        if (data) {
          setCart(data);
          if (data.paymentMethods.length > 0) {
            setSelectedPaymentMethod(data.paymentMethods[0]);
          }
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchData();
  }, [setCart, setSelectedPaymentMethod]);

  const handleRemoveItem = (productId) => {
    // Implement logic to remove item from cart
  };

  const handleAddItem = (productId) => {
    // Implement logic to add item to cart
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className={styles.container}>
       
      <h2 className={styles.heading}>
        <div className={styles.grow} >
      <img src="https://groww.in/groww-logo-270.png" 
                  alt="Groww Logo"
                  className={styles.paymentLogo}
                />
                </div>
        <div className={styles.check}>        
        Checkout
        </div>
      </h2>
      <div className={styles.section}>
        <h3 className={styles.subheading}>Order Summary</h3>
        <div className={styles.orderSummary}>
          {cart.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.product}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <div className={styles.productName}>{product.title}</div>
                  <div className={styles.productDetails}>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      className={styles.addbutton}
                      onClick={() => handleRemoveItem(product.id)}
                    >
                      +
                    </button>
                    <button
                      className={styles.deletebutton}
                      onClick={() => handleAddItem(product.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalAmount}>Total Order Amount: $ {orderTotal.toFixed(2)}</div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subheading}>Payment Methods</h3>
        <ul className={styles.paymentMethods}>
          {paymentMethods.map((method) => (
            <li
              key={method}
              className={`${
                selectedPaymentMethod === method ? styles.selected : styles.unselected 
              }`}
              onClick={() => handlePaymentMethodClick(method)}
            >
              <span>{method}</span>
              {method === 'UPI' && (
                <img
                  src="https://logodix.com/logo/1763566.png" 
                  alt="UPI Logo"
                  className={styles.paymentLogo}
                />
              )}
              {method === 'CARDS' && (
                <img
                  src="https://th.bing.com/th/id/OIP.XybdBNeA81q0MhHe1KF5OAHaEb?rs=1&pid=ImgDetMain"
                  alt="CARDS Logo"
                  className={styles.paymentLogo}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/payment">
      <button className={styles.paymentButton}>Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
