import React, { useContext } from 'react';
import Context from '../context/Context';

const TotalPrice = () => {
  const { orders } = useContext(Context);
  const allSubtotals = orders.map((order) => order.quantity * order.price);

  const calculateTotal = () => allSubtotals.reduce(((acc, curr) => acc + curr), 0);
  return (
    <div>
      Total R$
      {calculateTotal()}
    </div>
  );
};

export default TotalPrice;
