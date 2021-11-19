import React from 'react';
import NavBar from '../components/NavBar';
import DetailOrderTable from '../components/DetailOrderTable';

const DetailOrder = (props) => (
  <div>
    <NavBar />
    <DetailOrderTable props={ props } />
    <h3>Detalhes do pedido</h3>
  </div>);

export default DetailOrder;
