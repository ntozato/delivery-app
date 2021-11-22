import React, { useContext } from 'react';
import Context from '../../context/Context';
import './style.css';

const TotalPrice = () => {
  const { orders, setTotalPrice } = useContext(Context);
  const allSubtotals = Object.values(orders).map((order) => order.qtd * order.price);

  const calculateTotal = () => {
    const total = allSubtotals.reduce(((acc, curr) => acc + curr), 0);
    setTotalPrice(total);
    return String((total).toFixed(2)).replace('.', ',');
  };
  return (
    <div data-testid="customer_checkout__element-order-total-price">
      Total R$
      { calculateTotal() }
    </div>
  );
};

export default TotalPrice;
