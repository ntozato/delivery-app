import React from 'react';
import SellerNavBar from '../components/SellerNavBar';
import SellerDetailOrderTable from '../components/SellerDetailOrderTable';

const SellerDetailOrder = () => (
  <div>
    <SellerNavBar />
    <h3>Detalhes do pedido</h3>
    <SellerDetailOrderTable />
  </div>);

export default SellerDetailOrder;
