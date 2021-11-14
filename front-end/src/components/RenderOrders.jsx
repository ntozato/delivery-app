import React, { useContext } from 'react';
import Context from '../context/Context';

const RenderOrders = () => {
  const { orders, setOrders } = useContext(Context);

  const deleteOrder = (order) => {
    const newOrders = orders.filter((o) => o.name !== order.name);
    setOrders(newOrders);
  };

  const calculateSubtotal = (quantity, price) => quantity * price;

  return (
    <tbody>
      {orders.map((order, index) => (
        <tr key={ index }>
          <td>{index}</td>
          <td>
            {order.name}
          </td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td>
            {calculateSubtotal(order.quantity, order.price)}
          </td>
          <button type="button" onClick={ () => deleteOrder(order) }>Remover</button>
        </tr>
      ))}
    </tbody>);
};

export default RenderOrders;
