import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatId from '../helpers/formatId';
import api from '../api/index';

const DetailOrderTable = () => {
  const { id } = useParams();
  const [isFetched, setIsFetched] = useState(false);
  const [saleData, setSaleData] = useState({});
  const getSaleAndSaveInState = async () => {
    const { data } = await api.getSale(id);
    const seller = await api.getSeller(data.seller_id);
    setSaleData({ ...data, sellerName: seller.data.name });
    setIsFetched(!isFetched);
  };

  const formattedDate = () => new Date(saleData.sale_date)
    .toLocaleString('pt-br').split(' ')[0];

  const renderTable = () => (
    <table>
      <tr>
        <th>
          PEDIDO
          {' '}
          {formatId(id)}
        </th>
        <th>
          P.Vend:
          {' '}
          {saleData.sellerName}
        </th>
        <th>{formattedDate()}</th>
        <th>status</th>
        <th>marcação</th>
      </tr>
    </table>);

  useEffect(() => {
    getSaleAndSaveInState();
    // eslint-disable-next-line
  }, []);

  return (
    isFetched
      ? renderTable() : <h1>Loading</h1>);
};

export default DetailOrderTable;
