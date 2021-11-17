import React, { useContext } from 'react';
import Context from '../context/Context';

const RenderOrders = () => {
  const { orders, setOrders } = useContext(Context);

  const deleteOrder = (order) => {
    const newOrders = Object.values(orders).filter((o) => o.name !== order.name);
    setOrders(newOrders);
  };

  const calculateSubtotal = (qtd, price) => (
    String((qtd * price)
      .toFixed(2))).replace('.', ',');

  const filteredProducts = Object.values(orders).filter((product) => product.qtd > 0);

  return (
    <tbody>
      {filteredProducts.map((order, index) => (
        <tr key={ index + 1 }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            {index + 1}
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-name-${index}`
            }
          >
            {order.name}
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
            }
          >
            {order.qtd}

          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-unit-price-${index}`
            }
          >
            {order.price.replace('.', ',')}

          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-sub-total-${index}`
            }
          >
            {calculateSubtotal(order.qtd, order.price)}
          </td>
          <button
            data-testid={
              `customer_checkout__element-order-table-remove-${index}`
            }
            type="button"
            onClick={ () => deleteOrder(order) }
          >
            Remover

          </button>
        </tr>
      ))}
    </tbody>
  );
};

export default RenderOrders;
