import React from 'react';
import Badge from 'react-bootstrap/Badge';
import SellerDetailOrderTable from '../../components/SellerDetailOrderTable';
import NavBar from '../../components/NavBar';

const SellerDetailOrder = () => (
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
    <SellerDetailOrderTable />
  </div>);

export default SellerDetailOrder;
