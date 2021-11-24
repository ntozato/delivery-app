import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import formatId from '../../helpers/formatId';
import api from '../../api';
import Context from '../../context/Context';
import RenderOrderDetails from '../RenderOrderDetails';
import socketClient from '../../helpers/socketClient';
import './style.css';

const DetailOrderTable = () => {
  const { id } = useParams();
  const { saleData, setSaleData } = useContext(Context);
  const [isFetched, setIsFetched] = useState(false);
  const getSaleAndSaveInState = async () => {
    const { data } = await api.getSale(id);
    const seller = await api.getSeller(data.seller_id);
    setSaleData({ ...data, sellerName: seller.data.name });
    setIsFetched(!isFetched);
  };

  const updateStatus = async (saleId, status) => {
    const result = await api.updateSaleStatus(saleId, status);

    if (result.data === 'Entregue') {
      setSaleData({ ...saleData, status: result.data });
    }
    socketClient.emit('updateStatus', 'detailOrderTable');
    return result;
  };

  const formattedDate = () => new Date(saleData.sale_date)
    .toLocaleString('pt-br').split(' ')[0];

  const a = 'customer_order_details__element-order-details-label-delivery-status';

  const renderButton = () => (
    <Button
      variant="light"
      disabled={ saleData.status !== 'Em Trânsito' }
      type="button"
      data-testid="customer_order_details__button-delivery-check"
      onClick={ () => updateStatus(id, 'Entregue') }
    >
      MARCAR COMO ENTREGUE

    </Button>
  );

  const renderTable = () => (
    <div>
      <Table striped bordered hover variant="dark" className="ml-2 mr-2">
        <thead>
          <tr style={ { margin: 0 } }>
            <th>
              PEDIDO
              { ' ' }
              { formatId(id) }
            </th>
            <th>
              P.Vend:
              { ' ' }
              { saleData.sellerName }
            </th>
            <th
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { formattedDate() }
            </th>
            <th
              data-testid={ a }
            >
              { saleData.status }
            </th>
            <th>
              {renderButton()}
            </th>
          </tr>
        </thead>
        <RenderOrderDetails />
      </Table>
      <h3 data-testid="customer_order_details__element-order-total-price">
        <Badge
          className="mx-2"
          size="lg"
          bg="dark"
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Total: R$ ${saleData.total_price.replace('.', ',')}` }
        </Badge>
      </h3>
    </div>
  );

  useEffect(() => {
    getSaleAndSaveInState();
    socketClient.on('updateStatus', () => {
      getSaleAndSaveInState();
    });
    return () => {
      socketClient.removeListener('updateStatus');
      socketClient.removeAllListeners('updateStatus');
    };
    // eslint-disable-next-line
  }, []);

  return (
    isFetched
      ? renderTable() : <h1>Loading</h1>);
};

export default DetailOrderTable;
