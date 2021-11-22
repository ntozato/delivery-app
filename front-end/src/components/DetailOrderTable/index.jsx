import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatId from '../../helpers/formatId';
import api from '../../api';
import Context from '../../context/Context';
import RenderOrderDetails from '../RenderOrderDetails';
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

    return result;
  };

  const formattedDate = () => new Date(saleData.sale_date)
    .toLocaleString('pt-br').split(' ')[0];

  const a = 'customer_order_details__element-order-details-label-delivery-status';

  const renderTable = () => (
    <div>
      <table>
        <tr>
          <th data-testid="customer_order_details__element-order-details-label-order-id">
            PEDIDO
            { ' ' }
            { formatId(id) }
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
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
            <button
              disabled={ saleData.status !== 'Em Trânsito' }
              type="button"
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => updateStatus(id, 'Entregue') }
            >
              MARCAR COMO ENTREGUE

            </button>
          </th>
        </tr>
        <RenderOrderDetails />
      </table>
      <div data-testid="customer_order_details__element-order-total-price">
        { `Total: R$ ${saleData.total_price.replace('.', ',')}` }
      </div>
    </div>
  );

  useEffect(() => {
    getSaleAndSaveInState();
    // eslint-disable-next-line
  }, []);

  return (
    isFetched
      ? renderTable() : <h1>Loading</h1>);
};

export default DetailOrderTable;
