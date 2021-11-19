import React from 'react';
import NavBar from '../components/NavBar';
import SellerDetailOrderTable from '../components/SellerDetailOrderTable';

const SellerDetailOrder = () => (
  <div>
    <NavBar />
    <h3>Detalhes do pedido</h3>
    <SellerDetailOrderTable />
  </div>);

export default SellerDetailOrder;
