import React from 'react';
import Badge from 'react-bootstrap/Badge';
import NavBar from '../../components/NavBar';
import DetailOrderTable from '../../components/DetailOrderTable';

const DetailOrder = () => (
  <div>
    <NavBar />
    <h3 style={ { width: '100%', margin: 0 } }>
      <Badge
        style={ { width: '100%' } }
        bg="secondary"
      >
        Detalhes e endereço para entrega
      </Badge>
    </h3>
    <DetailOrderTable />
  </div>);

export default DetailOrder;
