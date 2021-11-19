import React from 'react';
import RenderOrders from '../components/RenderOrders';
import TotalPrice from '../components/TotalPrice';
import DetailsAndAddress from '../components/DetailsAndAddress';
import FinishOrderButton from '../components/FinishOrderButton';

const Checkout = () => (
  <div>
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
      <TotalPrice />
    </table>
    <DetailsAndAddress />
    <FinishOrderButton />
  </div>);

export default Checkout;
