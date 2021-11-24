import React from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from '../../components/NavBar';
import RenderOrders from '../../components/RenderOrders';
import TotalPrice from '../../components/TotalPrice';
import DetailsAndAddress from '../../components/DetailsAndAddress';
import FinishOrderButton from '../../components/FinishOrderButton';

const Checkout = () => (
  <>
    <NavBar />
    <Table striped bordered hover variant="dark" className="ml-2 mr-2">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover</th>
        </tr>
      </thead>
      <RenderOrders />
      <TotalPrice />
    </Table>
    <DetailsAndAddress />
    <FinishOrderButton />
  </>
);

export default Checkout;
