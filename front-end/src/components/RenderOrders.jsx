import React, { useContext } from 'react';
import Context from '../context/Context';

const RenderOrders = () => {
  const { orders, setOrders } = useContext(Context);

  const deleteOrder = (order) => {
    const newOrders = orders.filter((o) => o.name !== order.name);
    setOrders(newOrders);
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div key={ index }>
          <div>{index}</div>
          <div>
            {order.name}
          </div>
          <div>{order.quantity}</div>
          <div>{order.price}</div>
          <div>
            {order.quantity}
            *
            {order.price}
          </div>
          <button type="button" onClick={ () => deleteOrder(order) }>Remover</button>
        </div>
      ))}
    </div>);
};

export default RenderOrders;
