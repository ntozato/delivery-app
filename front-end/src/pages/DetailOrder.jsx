import React from 'react';
import NavBar from '../components/NavBar';
import DetailOrderTable from '../components/DetailOrderTable';

const DetailOrder = () => (
  <div>
    <NavBar />
    <DetailOrderTable />
    <h3>Detalhes do pedido</h3>
  </div>);

export default DetailOrder;
