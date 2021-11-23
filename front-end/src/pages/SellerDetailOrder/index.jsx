import React from 'react';
import SellerDetailOrderTable from '../../components/SellerDetailOrderTable';
import NavBar from '../../components/NavBar';

const SellerDetailOrder = () => (
  <div>
    <NavBar />
    <h3>Detalhes do pedido</h3>
    <SellerDetailOrderTable />
  </div>);

export default SellerDetailOrder;
