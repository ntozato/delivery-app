import React, { useContext } from 'react';
import Context from '../../context/Context';
import './style.css';

const RenderOrderDetails = () => {
  const { saleData } = useContext(Context);
  const orders = () => saleData.products.map((product, index) => (
    <tr style={ { margin: 0 } } key={ index }>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        { product.name }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        { product.salesProduct.quantity }
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        { product.price }

      </td>
      <td
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        { (product.price * product.salesProduct.quantity).toFixed(2) }

      </td>
    </tr>));

  return (
    <tbody style={ { margin: 0 } }>
      { orders() }
    </tbody>
  );
};

export default RenderOrderDetails;
