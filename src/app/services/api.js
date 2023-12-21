// api.js
export const fetchOrderDetails = async () => {
    const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
    console.log(1);
    return response.json();
  };
  
  export const fetchMerchantMetadata = async () => {
    const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
    return response.json();
  };
  