import React from 'react';
import './Success.css';
import { useParams } from 'react-router-dom';

function OrderPlaced() {
    const {id} = useParams();
  return (
    <div className="order-placed-container">
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your purchase.</p>
      <p>Your order id is #{id}</p>
      <p>We will process and deliver your order soon.</p>
    </div>
  );
}

export default OrderPlaced;
