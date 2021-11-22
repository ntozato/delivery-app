import React from 'react';
import NavBar from '../../components/NavBar';
import DetailOrderTable from '../../components/DetailOrderTable';

const DetailOrder = () => (
  <div>
    <NavBar />
    <h3>Detalhes do pedido</h3>
    <DetailOrderTable />
  </div>);

export default DetailOrder;
