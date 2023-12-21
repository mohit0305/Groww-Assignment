// PaymentsOptions.js
"use client";
// import React from 'react';
// import useCart from '../../state/cart';
// import Link from 'next/link';
// import styles from './PaymentsOptions.module.css'; // Include your styles

// const PaymentsOptions = () => {
//   const { paymentMethods, selectedPaymentMethod, setSelectedPaymentMethod } = useCart();

//   const handlePaymentMethodChange = (method) => {
//     setSelectedPaymentMethod(method);
//   };

//   return (
//     <div className={styles['payment-options-container']}>
//       <h2>Payment Options</h2>

//       <ul className={styles['payment-methods']}>
//         {paymentMethods.map((method) => (
//           <li
//             key={method}
//             className={`${styles['payment-method']} ${
//               selectedPaymentMethod === method ? styles['selected'] : ''
//             }`}
//             onClick={() => handlePaymentMethodChange(method)}
//           >
//             {method}
//           </li>
//         ))}
//       </ul>

//       {/* Add a call-to-action button to proceed */}
//       <Link href="/confirmation">
//         <button className={styles['proceed-button']}>Proceed to Order Confirmation</button>
//       </Link>
//     </div>
//   );
// };

// export default PaymentsOptions;


// PaymentOptionPage.js
import React from 'react';
import useCart from '../../state/cart';
import Link from 'next/link';
import styles from './PaymentsOptions.module.css';

const PaymentOptionPage = () => {
  const { selectedPaymentMethod } = useCart();

  const renderPaymentDetails = () => {
    switch (selectedPaymentMethod) {
      case 'UPI':
        return (
          <div>
            <h2 className={styles.heading}>UPI Payment Details</h2>
            {/* UPI payment details */}
            <div className={styles.paymentOption}>
              <img src="https://th.bing.com/th/id/OIP.rl_j3EI-RMDdvvXcZPo1awHaHa?rs=1&pid=ImgDetMain" alt="PhonePe Logo" />
              <span>PhonePe</span>
            </div>
            <div className={styles.paymentOption}>
              <img src="https://static.vecteezy.com/system/resources/previews/017/221/853/original/google-pay-logo-transparent-free-png.png" alt="Google Pay Logo" />
              <span>Google Pay</span>
            </div>
            <div className={styles.paymentOption}>
              <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png" alt="Paytm Logo" />
              <span>Paytm</span>
            </div>
          </div>
        );
      case 'CARDS':
        return (
          <div className={styles.cardContainer}>
          <div className={styles.cardHeader}>
            <img src="https://www.freefx.com/img/Funding%20Icons/VisaMastercard.png" alt="Card Logo" className={styles.cardLogo} />
            {/* <span className={styles.cardType}>VISA</span> */}
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.inputField}>
              <label className={styles.label} htmlFor="cardNumber">
                Card Number:
              </label>
              <input className={styles.input} type="text" id="cardNumber" placeholder="**** **** **** 1234" />
            </div>
            <div className={styles.inputField}>
              <label className={styles.label} htmlFor="expiryDate">
                Expiry Date:
              </label>
              <input className={styles.input} type="text" id="expiryDate" placeholder="12/24" />
            </div>
            <div className={styles.inputField}>
              <label className={styles.label} htmlFor="cardHolder">
                Card Holder:
              </label>
              <input className={styles.input} type="text" id="cardHolder" placeholder="John Doe" />
            </div>
            <div className={styles.inputField}>
              <label className={styles.label} htmlFor="cvv">
                CVV:
              </label>
              <input className={styles.input} type="text" id="cvv" placeholder="***" />
            </div>
          </div>
        </div>
        );
      default:
        return (
          <div>
            <h2 className={styles.heading}>Payment Details</h2>
            <p>No payment details available for the selected method.</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
      {renderPaymentDetails()}
      <Link href="/confirmation">
      <button className={styles.paymentButton}>Proceed to Order Confirmation</button>
      </Link>
    </div>
  );
};

export default PaymentOptionPage;

