import React from 'react';
import RenderOrders from '../components/RenderOrders';

const Checkout = () => (
  <table border="1">
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
      <th>Remover</th>
    </tr>
    <RenderOrders />
  </table>);

export default Checkout;
